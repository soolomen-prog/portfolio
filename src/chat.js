// chat.js — базовая логика чата (без API)

document.addEventListener("DOMContentLoaded", () => {
  const chatContent = document.getElementById("chatContent");
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("chatSend");

  if (!chatContent || !input || !sendBtn) {
    console.warn("Chat elements not found");
    return;
  }

  // ---------- helpers ----------

  function scrollToBottom() {
    chatContent.scrollTop = chatContent.scrollHeight;
  }

  function createBotMessage(text) {
    const msg = document.createElement("div");
    msg.className = "chat-message chat-message--bot";

    msg.innerHTML = `
      <div class="chat-bubble chat-bubble--bot">${text}</div>
      <div class="chat-author">Lukas</div>
    `;

    chatContent.appendChild(msg);
    scrollToBottom();
  }

  function createUserMessage(text) {
    const msg = document.createElement("div");
    msg.className = "chat-message chat-message--user";

    msg.innerHTML = `
      <div class="chat-bubble chat-bubble--user">${text}</div>
    `;

    chatContent.appendChild(msg);
    scrollToBottom();
  }

  // ---------- intro message ----------

  function showIntro() {
    const intro = document.createElement("div");
    intro.className = "chat-message chat-message--intro";

    intro.innerHTML = `
      <div class="chat-bot-header">
        <img src="/src/assets/icons/lukas.svg" alt="Lukas" width="42" height="42" />
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
  }

  // ---------- send logic ----------

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    createUserMessage(text);
    input.value = "";

    // заглушка ответа бота
    setTimeout(() => {
      createBotMessage("Спасибо! Я уточню детали и помогу вам дальше 🙂");
    }, 600);
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
