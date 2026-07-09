// chat.js — базовая логика чата (c API)

document.addEventListener("DOMContentLoaded", () => {
  const chatContent = document.getElementById("chatContent");
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("chatSend");

  if (!chatContent || !input || !sendBtn) {
    console.warn("Chat elements not found");
    return;
  }

  // Храним контекст диалога для API
  const messages = [];

  // ---------- helpers ----------

  function scrollToBottom() {
    chatContent.scrollTop = chatContent.scrollHeight;
  }

  // простое экранирование, чтобы пользовательский текст не ломал HTML
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatBotText(text) {
  return escapeHtml(text)
    // схлопываем 3+ переводов строк в 2
    .replace(/\n{3,}/g, "\n\n")
    // 2 перевода строки = новый абзац
    .replace(/\n\n/g, "<br><br>")
    // 1 перевод строки = перенос
    .replace(/\n/g, "<br>");
}



  function createBotMessage(text) {
    const msg = document.createElement("div");
    msg.className = "chat-message chat-message--bot";

    msg.innerHTML = `
      <div class="chat-bubble chat-bubble--bot">${formatBotText(text)}</div>
      <div class="chat-author">Lukas</div>
    `;

    chatContent.appendChild(msg);
    scrollToBottom();
  }

  function createUserMessage(text) {
    const msg = document.createElement("div");
    msg.className = "chat-message chat-message--user";

    msg.innerHTML = `
      <div class="chat-bubble chat-bubble--user">${escapeHtml(text)}</div>
    `;

    chatContent.appendChild(msg);
    scrollToBottom();
  }

  function removeIntroIfExists() {
    const intro = chatContent.querySelector(".chat-message--intro");
    if (intro) intro.remove();
  }

  // ---------- intro message ----------

  function showIntro() {
    const intro = document.createElement("div");
    intro.className = "chat-message chat-message--intro";

    // ОСТАВИЛ ТВОЙ ТЕКСТ 1:1
    // ВАЖНО: путь к иконке лучше как в проекте (/src/assets/icons/...), но я НЕ меняю, чтобы не "удалять/ломать"
intro.innerHTML = `
  <div class="chat-bot-header">
    <span class="chat-bot-icon">
      <img src="/assets/lukas.svg" alt="AI assistant" width="42" height="42" />
    </span>
  </div>

  <p class="chat-intro-text">
    Hallo! Ich bin Lukas ein KI-Assistent für Andreis Portfolio.<br>
    Sie können mir Fragen zu Andreis Projekten.
  </p>

  <div class="chat-intro-list">
    <p class="chat-intro-heading">Zum Beispiel:</p>
    <ul>
      <li>Welche Projekte zeigt dieses Portfolio?</li>
      <li>Wie arbeitet Andrei an UX/UI-Aufgaben?</li>
      <li>Welche Erfahrung und Fähigkeiten bringt Andrei mit?</li>
    </ul>
  </div>
`;

    chatContent.appendChild(intro);
    scrollToBottom();

    // добавим system/assistant контекст (чтобы модель знала кто она)
    messages.push({
      role: "system",
      content:`
        Ты — Lukas AI Assistant для портфолио Andrei Solomin.

Твоя задача — помогать посетителям лучше познакомиться с Андреем как UX/UI-дизайнером, рассказывать о его опыте, проектах, подходе к дизайну и отвечать на вопросы по материалам портфолио.

Информация об Андрее:

• Andrei Solomin — UX/UI Designer и Digital Designer, живущий в Германии.
• Он проектирует сайты, веб-приложения, цифровые сервисы и интерфейсы, сочетая UX-дизайн, UI-дизайн, исследование пользователей и фронтенд-разработку.
• В портфолио представлены реальные проекты: веб-платформы, лендинги, интерактивные презентации, брендинг, дизайн-системы и другие цифровые продукты.
• Основной подход Андрея — создавать понятные, логичные и удобные интерфейсы, уделяя большое внимание структуре информации, пользовательским сценариям и деталям взаимодействия.
• Помимо UX/UI он имеет опыт в графическом дизайне, брендинге, печатной продукции, создании интерактивных презентаций и разработке сайтов.
• Андрей также умеет верстать проекты на HTML, CSS и JavaScript, благодаря чему хорошо понимает техническую сторону реализации дизайна.

Ты можешь:

• рассказывать о проектах из портфолио;
• объяснять решения, принятые в отдельных кейсах;
• отвечать на вопросы об опыте, навыках и подходе Андрея к дизайну;
• обсуждать UX, UI, дизайн-системы, интерфейсы и цифровые продукты;
• объяснять используемые технологии и инструменты.

Правила:

• Отвечай только на основе информации, представленной в портфолио и в этих инструкциях.
• Не придумывай факты об Андрее. Если какой-либо информации нет, честно скажи, что она не указана в портфолио.
• Ты не являешься менеджером, продавцом или представителем студии.
• Ты не принимаешь заказы, не оцениваешь проекты, не называешь стоимость услуг и не обсуждаешь сроки выполнения.
• Не создавай впечатление, что пользователь оформляет заявку или начинает коммерческий проект.
• Если пользователь хочет связаться с Андреем лично, предложи воспользоваться контактной информацией, указанной на сайте (hi@andreisolomin.com).

Тон общения:

• дружелюбный, спокойный и профессиональный;
• отвечай кратко, понятно и по существу;
• объясняй сложные вещи простым языком;
• при вопросах о конкретном проекте старайся сначала рассказать о его цели, затем о дизайнерских решениях и результате;
• не используй продающие фразы вроде «оставьте заявку», «мы свяжемся», «давайте обсудим ваш проект» или подобные.
`
    });
  }

  // ---------- send logic ----------

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    // после первого реального сообщения — убираем intro (как ты и просил)
    removeIntroIfExists();

    createUserMessage(text);
    input.value = "";
    scrollToBottom();

    // пушим в контекст
    messages.push({ role: "user", content: text });

    // блокируем кнопку на время запроса
    sendBtn.disabled = true;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages })
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

// 1️⃣ сначала получаем ответ модели
const answer =
  typeof data?.answer === "string" && data.answer.trim()
    ? data.answer.trim()
    : "Спасибо! Я уточню детали и помогу вам дальше 🙂";

let cleanAnswer = answer;

// 2️⃣ обработка LEAD-блока
const leadMatch = answer.match(
  /<<<LEAD>>>[\s\S]*?email:\s*(.+?)\nsummary:\n([\s\S]*?)<<<END>>>/
);

if (leadMatch) {
  const email = leadMatch[1].trim();
  const summary = leadMatch[2].trim();

  try {
    await sendLead(email, summary);
  } catch (e) {
    console.error("Send lead error", e);
  }

  // убираем служебный блок из текста для пользователя
  cleanAnswer = answer.replace(
    /<<<LEAD>>>[\s\S]*?<<<END>>>/,
    ""
  ).trim();
}

// 3️⃣ показываем пользователю
createBotMessage(cleanAnswer);

// 4️⃣ сохраняем в контекст
messages.push({ role: "assistant", content: cleanAnswer });

    } catch (e) {
      console.error(e);
      createBotMessage("Произошла ошибка. Попробуйте ещё раз чуть позже.");
    } finally {
      sendBtn.disabled = false;
      scrollToBottom();
    }
  }

  // ---------- events ----------

  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // ---------- init ----------

  showIntro();

  async function sendLead(email, summary) {
  const response = await fetch("/api/send-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      summary,
    }),
  });

  if (!response.ok) {
    throw new Error("Email send failed");
  }
}

});
