// src/case/caseRouter.js

import projects from '../data/projects.json';
import { renderCase } from './caseRenderer.js';

let isCaseOpen = false;

/**
 * Открыть кейс и обновить URL
 */
export function openCaseById(caseId) {
  const project = projects.find(p => p.id === caseId);
  if (!project) return;

  // обновляем URL
  history.pushState(
    { caseId },
    '',
    `/#case/${caseId}`
  );

  renderCase(caseId);
  isCaseOpen = true;
}

/**
 * Закрыть кейс и вернуть URL
 */
export function closeCaseRoute() {
  if (!isCaseOpen) return;

  history.pushState({}, '', '/');
  isCaseOpen = false;
}

/**
 * Проверка URL при загрузке / навигации
 */
export function initCaseRouter() {
  const match = location.hash.match(/^#case\/(.+)$/);
  if (match) {
    openCaseById(match[1]);
  }
}

// back / forward
window.addEventListener('popstate', () => {
  const match = location.hash.match(/^#case\/(.+)$/);
  if (match) {
    openCaseById(match[1]);
  } else {
    closeCaseRoute();
  }
});
