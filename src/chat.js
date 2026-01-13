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

  function createBotMessage(text) {
    const msg = document.createElement("div");
    msg.className = "chat-message chat-message--bot";

    msg.innerHTML = `
      <div class="chat-bubble chat-bubble--bot">${escapeHtml(text)}</div>
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
        <img src="/assets/lukas.svg" alt="Lukas" width="42" height="42" />
      </div>

      <p class="chat-intro-text">
        Привет! Я Лукас — виртуальный менеджер. Я не человек, а ИИ.<br>
        Я могу предварительно оценить ваш проект, рассказать об этапах работы,
        помочь сформировать задачу или принять заказ
      </p>

      <div class="chat-intro-list">
        <p class="chat-intro-heading">Основные направления работы:</p>
        <ul>
          <li>Веб-дизайн</li>
          <li>Брендинг и корпоративный стиль</li>
          <li>Печатные материалы и каталоги</li>
          <li>Оформление соцсетей</li>
        </ul>
      </div>
    `;

    chatContent.appendChild(intro);
    scrollToBottom();

    // добавим system/assistant контекст (чтобы модель знала кто она)
    messages.push({
      role: "system",
      content:
        "Ты — Lukas, виртуальный менеджер студии Андрея Соломина. " +
        "Задавай уточняющие вопросы, помогай сформировать ТЗ и оценить проект. " +
        "Пиши по-русски, коротко и по делу."
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

      // ожидаем формат { answer: "..." } (как мы делали)
      const answer =
        typeof data?.answer === "string" && data.answer.trim()
          ? data.answer.trim()
          : "Спасибо! Я уточню детали и помогу вам дальше 🙂";

      createBotMessage(answer);

      // сохраняем ответ в контекст
      messages.push({ role: "assistant", content: answer });
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
});
