// Lắng nghe sự kiện click trên tất cả các nút
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    // Lấy tên tệp âm thanh từ thuộc tính data-sound của nút
    const soundFile = button.getAttribute("data-sound");

    // Tạo đối tượng Audio và phát âm thanh
    const audio = new Audio(soundFile);
    audio.play(); // Phát âm thanh tương ứng với nút
  });
});
