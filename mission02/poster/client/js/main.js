/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav ul");
  const mainImage = document.querySelector(".visual img");
  const nickName = document.querySelector(".nickName");
  const elem = document.querySelector("body");

  // 배경 색상 설정 함수
  function setBgColor(colorA, colorB = "#000") {
    elem.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
  }

  // 메인 이미지 설정 함수
  function setImage(data) {
    mainImage.src = `./assets/${data.name}.jpeg`;
    mainImage.alt = data.alt;
  }

  // 이름 텍스트 설정 함수
  function setNameText(data) {
    nickName.textContent = data.name;
  }

  // 오디오 재생 함수
  function playAudio(data) {
    const player = new AudioPlayer(`./assets/audio/${data.name}.m4a`);
    player.play();
  }

  // 클릭 이벤트 처리 함수
  function handleClick(event) {
    const target = event.target.closest("li");

    const selectedData = data[target.dataset.index - 1];

    setBgColor(selectedData.color[0], selectedData.color[1]);
    setImage(selectedData);
    setNameText(selectedData);
    playAudio(selectedData);

    document
      .querySelectorAll(".nav li")
      .forEach((li) => li.classList.remove("is-active"));
    target.classList.add("is-active");
  }

  // 이벤트 위임을 사용하여 클릭 이벤트 설정
  nav.addEventListener("click", handleClick);
});
