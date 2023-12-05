function attachEventsListeners() {
  const buttonForDays = document.getElementById("daysBtn");
  const buttonForHours = document.getElementById("hoursBtn");
  const buttonForMinutes = document.getElementById("minutesBtn");
  const buttonForSeconds = document.getElementById("secondsBtn");

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const min = document.getElementById("minutes");
  const sec = document.getElementById("seconds");

  buttonForDays.addEventListener("click", calcDays);
  buttonForHours.addEventListener("click", calcHours);
  buttonForMinutes.addEventListener("click", calcMinutes);
  buttonForSeconds.addEventListener("click", calcSeconds);

  function calcDays() {
    const currentDays = days.value;
    hours.value = currentDays * 24;
    min.value = currentDays * 24 * 60;
    sec.value = currentDays * 24 * 60 * 60;
  }

  function calcHours() {
    const currentHours = hours.value;
    days.value = currentHours / 24;
    min.value = currentHours * 60;
    sec.value = currentHours * 60 * 60;
  }

  function calcMinutes() {
    const currentMin = min.value;
    days.value = currentMin / 60 / 24;
    hours.value = currentMin / 60 ;
    sec.value = currentMin * 60;
  }

  function calcSeconds() {
    const currentSec = sec.value;
    days.value = currentSec/60 / 60 / 24;
    hours.value = currentSec/60 / 60 ;
    min.value =  currentSec / 60 ;
  }

}
