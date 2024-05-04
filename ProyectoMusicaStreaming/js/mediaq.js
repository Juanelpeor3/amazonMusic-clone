window.addEventListener("resize", function () {
  //Elementos del navbar
  const anchoPantalla = window.innerWidth;
  const inicioOpcion = document.getElementById("inicio");
  const podcastsOpcion = document.getElementById("podcasts");
  const bibliotecaOpcion = document.getElementById("biblioteca");
  const buscarOpcion = document.querySelector(".search");
  const loginOpcion = document.querySelector(".login");
  if (anchoPantalla > 1000) {
    inicioOpcion.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="ic_navigation_home"
        d="M21.343,8.661 L13.448,1.556 C12.625,0.815 11.375,0.815 10.552,1.556 L2.657,8.661 C2.238,9.039 2,9.564 2,10.113 L2,20 C2,21.105 2.943,22 4.105,22 L9,22 L9,13 L15,13 L15,22 L19.895,22 C21.057,22 22,21.105 22,20 L22,10.113 C22,9.564 21.762,9.039 21.343,8.661 Z"
      ></path>
    </defs>
    <g fill-rule="evenodd" fill="transparent">
      <rect width="24" height="24"></rect>
      <use
        xlink:href="#ic_navigation_home"
        fill="currentColor"
      ></use>
    </g>
  </svg>INICIO`;
    podcastsOpcion.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="24px"
  height="24px"
  version="1.1"
  viewBox="0 0 24 24"
>
  <g
    id="ic_other_podcasts"
    fill-rule="evenodd"
    stroke="none"
    stroke-width="1"
    fill="transparent"
  >
    <rect
      id="//-Base"
      width="24"
      height="24"
      x="0"
      y="0"
      fill-opacity="0"
      fill-rule="nonzero"
    ></rect>
    <path
      fill="currentColor"
      d="M12,9.68863193 C13.1573913,9.68863193 14.1134972,10.6020281 14.1944489,11.7492889 L14.2,11.9071193 L14.2,17.4533378 C14.2,18.5475987 13.4037717,19.463433 12.3667003,19.6407885 L12.3665112,21.1558585 C13.3394287,21.1807028 14.1004206,21.3049072 14.1909654,21.4962817 L14.2,21.5350631 L14.2,22.6161974 C14.2,22.8540469 13.21,23 12,23 C10.8572222,23 9.91067901,22.8698134 9.80903464,22.6549788 L9.8,22.6161974 L9.8,21.5350631 C9.8,21.321744 10.5963251,21.1823434 11.6334888,21.1558585 L11.6332997,19.6407885 C10.6465065,19.4720314 9.87776986,18.634664 9.80555108,17.6111682 L9.8,17.4533378 L9.8,11.9071193 C9.8,10.6869513 10.79,9.68863193 12,9.68863193 Z M12,1 C18.0654,1 23,5.97495798 23,12.092437 C23,14.2976134 22.3587,16.4295798 21.1465,18.255395 C20.8088,18.7645378 20.1257,18.9009748 19.6208,18.560437 C19.1159,18.2187899 18.9806,17.5299496 19.3183,17.0208067 C20.2874,15.5621513 20.8,13.8561345 20.8,12.092437 C20.8,7.19956303 16.8521,3.21848739 12,3.21848739 C7.1479,3.21848739 3.2,7.19956303 3.2,12.092437 C3.2,13.8550252 3.7126,15.561042 4.6828,17.0208067 C5.0205,17.5299496 4.8852,18.2187899 4.3814,18.560437 C4.1933,18.6868908 3.9799,18.7478992 3.7698,18.7478992 C3.4156,18.7478992 3.0669,18.5748571 2.8546,18.255395 C1.6413,16.4284706 1,14.2965042 1,12.092437 C1,5.97495798 5.9346,1 12,1 Z M12,5.43697479 C15.6399,5.43697479 18.6,8.42194958 18.6,12.092437 C18.6,13.0186555 18.4141,13.9138151 18.0489,14.7557311 C17.8685,15.1716975 17.4648,15.4201681 17.0402,15.4201681 C16.8928,15.4201681 16.7432,15.3902185 16.6002,15.3269916 C16.0436,15.0807395 15.7895,14.4262857 16.0337,13.8650084 C16.2768,13.3059496 16.4,12.7091765 16.4,12.092437 C16.4,9.64544538 14.4266,7.65546218 12,7.65546218 C9.5734,7.65546218 7.6,9.64544538 7.6,12.092437 C7.6,12.7091765 7.7232,13.3059496 7.9652,13.8661176 C8.2094,14.427395 7.9553,15.0818487 7.3976,15.3269916 C6.8421,15.5754622 6.1931,15.3170084 5.9489,14.7546218 C5.5848,13.9127059 5.4,13.0175462 5.4,12.092437 C5.4,8.42194958 8.3601,5.43697479 12,5.43697479 Z"
    ></path>
  </g>
</svg>PODCASTS`;
    bibliotecaOpcion.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="ic_navigation_mymusic"
        fill-rule="nonzero"
        d="M9,15 L9,20 C9,21.105 8.105,22 7,22 C5.895,22 5,21.105 5,20 L5,15 C5,13.895 5.895,13 7,13 C8.105,13 9,13.895 9,15 Z M17,13 C15.895,13 15,13.895 15,15 L15,20 C15,21.105 15.895,22 17,22 C18.105,22 19,21.105 19,20 L19,15 C19,13.895 18.105,13 17,13 Z M22,15 L22,13 C22,7.486 17.514,3 12,3 C6.486,3 2,7.486 2,13 L2,15 C1.36,15.64 1,16.509 1,17.414 L1,17.586 C1,18.491 1.36,19.36 2,20 C2,20.553 2.448,21 3,21 C3.552,21 4,20.553 4,20 L4,13 C4,8.589 7.589,5 12,5 C16.411,5 20,8.589 20,13 L20,20 C20,20.553 20.447,21 21,21 C21.553,21 22,20.553 22,20 C22.64,19.36 23,18.491 23,17.586 L23,17.414 C23,16.509 22.64,15.64 22,15 Z"
      ></path>
    </defs>
    <g fill-rule="evenodd" fill="transparent">
      <rect width="24" height="24"></rect>
      <use
        xlink:href="#ic_navigation_mymusic"
        fill="currentColor"
      ></use>
    </g>
  </svg>BIBLIOTECA`;
    buscarOpcion.innerHTML = `<input type="text" placeholder="Buscar" /><button type="submit">Buscar</button>`;
  }
  if (anchoPantalla < 1000) {
    console.log("uwu");
    inicioOpcion.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="ic_navigation_home"
        d="M21.343,8.661 L13.448,1.556 C12.625,0.815 11.375,0.815 10.552,1.556 L2.657,8.661 C2.238,9.039 2,9.564 2,10.113 L2,20 C2,21.105 2.943,22 4.105,22 L9,22 L9,13 L15,13 L15,22 L19.895,22 C21.057,22 22,21.105 22,20 L22,10.113 C22,9.564 21.762,9.039 21.343,8.661 Z"
      ></path>
    </defs>
    <g fill-rule="evenodd" fill="transparent">
      <rect width="24" height="24"></rect>
      <use
        xlink:href="#ic_navigation_home"
        fill="currentColor"
      ></use>
    </g>
  </svg>`;
    podcastsOpcion.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="24px"
  height="24px"
  version="1.1"
  viewBox="0 0 24 24"
>
  <g
    id="ic_other_podcasts"
    fill-rule="evenodd"
    stroke="none"
    stroke-width="1"
    fill="transparent"
  >
    <rect
      id="//-Base"
      width="24"
      height="24"
      x="0"
      y="0"
      fill-opacity="0"
      fill-rule="nonzero"
    ></rect>
    <path
      fill="currentColor"
      d="M12,9.68863193 C13.1573913,9.68863193 14.1134972,10.6020281 14.1944489,11.7492889 L14.2,11.9071193 L14.2,17.4533378 C14.2,18.5475987 13.4037717,19.463433 12.3667003,19.6407885 L12.3665112,21.1558585 C13.3394287,21.1807028 14.1004206,21.3049072 14.1909654,21.4962817 L14.2,21.5350631 L14.2,22.6161974 C14.2,22.8540469 13.21,23 12,23 C10.8572222,23 9.91067901,22.8698134 9.80903464,22.6549788 L9.8,22.6161974 L9.8,21.5350631 C9.8,21.321744 10.5963251,21.1823434 11.6334888,21.1558585 L11.6332997,19.6407885 C10.6465065,19.4720314 9.87776986,18.634664 9.80555108,17.6111682 L9.8,17.4533378 L9.8,11.9071193 C9.8,10.6869513 10.79,9.68863193 12,9.68863193 Z M12,1 C18.0654,1 23,5.97495798 23,12.092437 C23,14.2976134 22.3587,16.4295798 21.1465,18.255395 C20.8088,18.7645378 20.1257,18.9009748 19.6208,18.560437 C19.1159,18.2187899 18.9806,17.5299496 19.3183,17.0208067 C20.2874,15.5621513 20.8,13.8561345 20.8,12.092437 C20.8,7.19956303 16.8521,3.21848739 12,3.21848739 C7.1479,3.21848739 3.2,7.19956303 3.2,12.092437 C3.2,13.8550252 3.7126,15.561042 4.6828,17.0208067 C5.0205,17.5299496 4.8852,18.2187899 4.3814,18.560437 C4.1933,18.6868908 3.9799,18.7478992 3.7698,18.7478992 C3.4156,18.7478992 3.0669,18.5748571 2.8546,18.255395 C1.6413,16.4284706 1,14.2965042 1,12.092437 C1,5.97495798 5.9346,1 12,1 Z M12,5.43697479 C15.6399,5.43697479 18.6,8.42194958 18.6,12.092437 C18.6,13.0186555 18.4141,13.9138151 18.0489,14.7557311 C17.8685,15.1716975 17.4648,15.4201681 17.0402,15.4201681 C16.8928,15.4201681 16.7432,15.3902185 16.6002,15.3269916 C16.0436,15.0807395 15.7895,14.4262857 16.0337,13.8650084 C16.2768,13.3059496 16.4,12.7091765 16.4,12.092437 C16.4,9.64544538 14.4266,7.65546218 12,7.65546218 C9.5734,7.65546218 7.6,9.64544538 7.6,12.092437 C7.6,12.7091765 7.7232,13.3059496 7.9652,13.8661176 C8.2094,14.427395 7.9553,15.0818487 7.3976,15.3269916 C6.8421,15.5754622 6.1931,15.3170084 5.9489,14.7546218 C5.5848,13.9127059 5.4,13.0175462 5.4,12.092437 C5.4,8.42194958 8.3601,5.43697479 12,5.43697479 Z"
    ></path>
  </g>
</svg>`;
    bibliotecaOpcion.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="ic_navigation_mymusic"
        fill-rule="nonzero"
        d="M9,15 L9,20 C9,21.105 8.105,22 7,22 C5.895,22 5,21.105 5,20 L5,15 C5,13.895 5.895,13 7,13 C8.105,13 9,13.895 9,15 Z M17,13 C15.895,13 15,13.895 15,15 L15,20 C15,21.105 15.895,22 17,22 C18.105,22 19,21.105 19,20 L19,15 C19,13.895 18.105,13 17,13 Z M22,15 L22,13 C22,7.486 17.514,3 12,3 C6.486,3 2,7.486 2,13 L2,15 C1.36,15.64 1,16.509 1,17.414 L1,17.586 C1,18.491 1.36,19.36 2,20 C2,20.553 2.448,21 3,21 C3.552,21 4,20.553 4,20 L4,13 C4,8.589 7.589,5 12,5 C16.411,5 20,8.589 20,13 L20,20 C20,20.553 20.447,21 21,21 C21.553,21 22,20.553 22,20 C22.64,19.36 23,18.491 23,17.586 L23,17.414 C23,16.509 22.64,15.64 22,15 Z"
      ></path>
    </defs>
    <g fill-rule="evenodd" fill="transparent">
      <rect width="24" height="24"></rect>
      <use
        xlink:href="#ic_navigation_mymusic"
        fill="currentColor"
      ></use>
    </g>
  </svg>`;
    buscarOpcion.innerHTML = `<input type="text" placeholder="Buscar" />`;
    loginOpcion.innerHTML = `<a href="login.html">Cerrar Sesión</a>`;
  }
  if (anchoPantalla <= 500) {
    buscarOpcion.innerHTML = "";
    loginOpcion.innerHTML = "";
  }
});
