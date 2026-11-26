import {connectStoryEffects} from './story-effects.mjs';

const tablist = document.querySelector('[role="tablist"]');
const tabs = [...tablist.querySelectorAll('[role="tab"]')];
function selectTab(active) {
  for (const tab of tabs) {
    const selected = tab === active;
    tab.setAttribute('aria-selected', selected);
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  }
}
tablist.addEventListener('click', event => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) selectTab(tab);
});
tablist.addEventListener('keydown', event => {
  const index = tabs.indexOf(event.target);
  if (index < 0) return;
  const next = {ArrowLeft: (index + tabs.length - 1) % tabs.length,
    ArrowRight: (index + 1) % tabs.length, Home: 0, End: tabs.length - 1}[event.key];
  if (next === undefined) return;
  event.preventDefault();
  selectTab(tabs[next]);
  tabs[next].focus();
});

const filters = document.querySelector('.example-filters');
filters.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  const choices = [...filters.querySelectorAll('button')];
  for (const choice of choices) choice.setAttribute('aria-pressed', choice === button);
  document.getElementById('filter-result').textContent =
    button === choices[0] ? '모든 별 · 50종' : '발견한 별 · 1종';
});

const modal = document.getElementById('modal');
const opener = document.getElementById('open-sample');
const storyEffects = connectStoryEffects(modal);
opener.addEventListener('click', () => {
  dismissToast();
  modal.classList.remove('hidden');
  modal.showModal();
  storyEffects.refresh();
});
modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});
modal.addEventListener('close', () => {
  modal.classList.add('hidden');
  storyEffects.reset();
  opener.focus();
});
document.getElementById('reduce-motion').addEventListener('change', event => {
  document.documentElement.classList.toggle('reduce-motion', event.target.checked);
});

const messages = {
  check: '주요 행동을 선택했어요.',
  notice: '보조 행동을 선택했어요.',
  recipe: '달빛 선반을 제작했어요.',
  gold: '5 골드와 나뭇가지 1개를 받았어요.',
  sparkle: '반짝이 1개를 받았어요.',
};
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const closeToast = document.getElementById('toastDismiss');
let toastTimer;
let toastTrigger;
function dismissToast() {
  clearTimeout(toastTimer);
  if (document.activeElement === closeToast) toastTrigger?.focus();
  toast.classList.remove('show');
  toastMessage.textContent = '';
  closeToast.inert = true;
}
function resumeToast() {
  clearTimeout(toastTimer);
  if (toast.classList.contains('show') && !toast.matches(':hover, :focus-within')) {
    toastTimer = setTimeout(dismissToast, 2500);
  }
}
for (const button of document.querySelectorAll('[data-toast]')) {
  button.addEventListener('click', () => {
    const kind = button.dataset.toast;
    toastTrigger = button;
    toast.dataset.kind = kind;
    toast.querySelector('.toast-mark').replaceChildren(
      document.getElementById('icon-' + kind).content.cloneNode(true));
    toastMessage.textContent = messages[kind];
    toast.classList.add('show');
    closeToast.inert = false;
    resumeToast();
  });
}
closeToast.addEventListener('click', dismissToast);
toast.addEventListener('pointerenter', () => clearTimeout(toastTimer));
toast.addEventListener('pointerleave', resumeToast);
toast.addEventListener('focusin', () => clearTimeout(toastTimer));
toast.addEventListener('focusout', () => queueMicrotask(resumeToast));
