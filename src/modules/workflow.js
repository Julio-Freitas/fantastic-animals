// @ts-nocheck
function checkWork() {
  const dayWeek = document.querySelector('[data-dayWeek]');
  const time = document.querySelector('[data-time]');

  const workDays = dayWeek.dataset.dayweek.split(',').map(Number);
  const [startWork, endWork] = time.dataset.time.split(',').map(Number);

  const dateNow = new Date();
  const todayDay = dateNow.getDay();
  const todayTime = dateNow.getHours();

  const isWorkToday = workDays.includes(todayDay);
  const openWork = startWork <= todayTime && endWork > todayTime;

  const weWork = isWorkToday && openWork;

  if (weWork) {
    dayWeek.parentElement.classList.add('isWorking');
  }
}

export default function workflowInit() {
  checkWork();
}
