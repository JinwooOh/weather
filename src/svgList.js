import React from 'react';

export default function icon(str) {
  if (str === 'sun' || str === 'clear-day') {
    return (
      <svg
        className="sun"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.997,51.999h-3.998c-1.105,0-2-0.895-2-1.999s0.895-2,2-2h3.998
    c1.105,0,2,0.896,2,2S73.103,51.999,71.997,51.999z M64.142,38.688c-0.781,0.781-2.049,0.781-2.828,0
    c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.142,38.688z
     M50.001,61.998c-6.627,0-12-5.372-12-11.998c0-6.627,5.372-11.999,12-11.999c6.627,0,11.998,5.372,11.998,11.999
    C61.999,56.626,56.628,61.998,50.001,61.998z M50.001,42.001c-4.418,0-8,3.581-8,7.999c0,4.417,3.583,7.999,8,7.999
    s7.998-3.582,7.998-7.999C57.999,45.582,54.419,42.001,50.001,42.001z M50.001,34.002c-1.105,0-2-0.896-2-2v-3.999
    c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.001,33.106,51.104,34.002,50.001,34.002z M35.86,38.688l-2.828-2.828
    c-0.781-0.781-0.781-2.047,0-2.828s2.047-0.781,2.828,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828S36.641,39.469,35.86,38.688z
     M34.002,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.895-1.999-1.999s0.896-2,1.999-2h4C33.107,48,34.002,48.896,34.002,50
    z M35.86,61.312c0.781-0.78,2.047-0.78,2.828,0c0.781,0.781,0.781,2.048,0,2.828l-2.828,2.828c-0.781,0.781-2.047,0.781-2.828,0
    c-0.781-0.78-0.781-2.047,0-2.828L35.86,61.312z M50.001,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2
    c-1.105,0-2-0.896-2-2v-4C48.001,66.893,48.896,65.998,50.001,65.998z M64.142,61.312l2.828,2.828c0.779,0.781,0.779,2.048,0,2.828
    c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.828c-0.781-0.78-0.781-2.047,0-2.828C62.093,60.531,63.36,60.531,64.142,61.312z"
        />
      </svg>
    );
  }
  if (str === 'rain') {
    return (
      <svg
        className="rain"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.499,46.501c-3.037,0-5.5,1.343-5.5,2.999c0-1.656-2.461-2.999-5.5-2.999
	c-1.863,0-3.504,0.509-4.498,1.282v8.716h1v4c0,1.104,0.895,2,2,2c1.104,0,1.998-0.896,1.998-2s0.896-2,2-2c1.105,0,2,0.896,2,2
	c0,3.313-2.686,5.999-5.998,5.999c-3.314,0-6-2.686-6-5.999v-4h1v-8.716c-0.994-0.773-2.635-1.282-4.5-1.282
	c-3.037,0-5.498,1.343-5.498,2.999l0,0c0-1.656-2.463-2.999-5.5-2.999s-5.5,1.343-5.5,2.999c0-7.179,9.85-15.998,21.999-15.998
	S71.997,42.321,71.997,49.5C71.997,47.844,69.536,46.501,66.499,46.501z"
        />
      </svg>
    );
  }
  if (str === 'wind') {
    return (
      <svg
        className="wind"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.999,52L65.999,52h-3c-1.105,0-2-0.895-2-1.999s0.895-2,2-2h3
	c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2c-1.105,0-2-0.896-2-2s0.895-2,2-2c0.137,0,0.271,0.014,0.402,0.041
	c3.121,0.211,5.596,2.783,5.596,5.959C71.997,49.314,69.312,52,65.999,52z M55.999,48.001h-2h-6.998H34.002
	c-1.104,0-1.999,0.896-1.999,2S32.898,52,34.002,52h2h3.999h3h4h3h3.998h2c3.314,0,6,2.687,6,6c0,3.176-2.475,5.748-5.596,5.959
	C56.272,63.986,56.138,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2c1.105,0,2-0.896,2-2s-0.895-2-2-2h-2h-3.998h-3h-4h-3
	h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998
	h2c1.105,0,2-0.896,2-2s-0.895-2-2-2c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2c0.139,0,0.273,0.015,0.404,0.041
	c3.121,0.211,5.596,2.783,5.596,5.959C61.999,45.314,59.313,48.001,55.999,48.001z"
        />
      </svg>
    );
  }
  if (str === 'cloudy') {
    return (
      <svg
        className="cloudy"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998
	c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205
	c6.627,0,11.999,5.373,11.999,12c0,6.625-5.372,11.998-11.999,11.998C57.168,65.639,47.143,65.639,43.945,65.639z M59.943,61.639
	c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.333,1.291c-1.231-5.316-5.974-9.29-11.665-9.29
	c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"
        />
      </svg>
    );
  }
  if (str === 'fog') {
    return (
      <svg
        className="fog"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h39.995
	c1.104,0,2,0.895,2,2C71.998,64.744,71.103,65.641,69.998,65.641z M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2
	h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.103,57.641,69.998,57.641z M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291
	c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999
	c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.652,3.342,11.301,8h-4.381
	C65.535,47.253,62.958,45.643,59.999,45.643z M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003
	c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"
        />
      </svg>
    );
  }
  if (str === 'snow') {
    return (
      <svg
        className="snow"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.659,46.733l-1.958,1.13c0.188,0.682,0.298,1.396,0.298,2.137
	c0,0.742-0.109,1.456-0.298,2.138l1.958,1.13c0.956,0.553,1.284,1.775,0.731,2.732c-0.552,0.956-1.774,1.284-2.731,0.731
	l-1.954-1.128c-1.003,1.02-2.277,1.766-3.705,2.134v2.262c0,1.104-0.896,2-2,2s-2-0.896-2-2v-2.262
	c-1.428-0.368-2.703-1.114-3.705-2.134l-1.954,1.128c-0.957,0.553-2.18,0.225-2.731-0.731c-0.553-0.957-0.225-2.18,0.731-2.732
	l1.958-1.13c-0.189-0.682-0.298-1.396-0.298-2.138c0-0.741,0.108-1.455,0.298-2.137l-1.958-1.13
	c-0.956-0.553-1.284-1.775-0.731-2.732c0.552-0.956,1.774-1.284,2.731-0.731l1.954,1.128c1.002-1.02,2.277-1.766,3.705-2.134v-2.262
	c0-1.104,0.896-2,2-2s2,0.896,2,2v2.262c1.428,0.368,2.702,1.114,3.705,2.134l1.954-1.128c0.957-0.553,2.18-0.225,2.731,0.731
	C60.943,44.958,60.615,46.181,59.659,46.733z M50,46.001c-2.209,0-4,1.791-4,3.999c0,2.209,1.791,4,4,4s3.999-1.791,3.999-4
	C53.999,47.792,52.209,46.001,50,46.001z"
        />
      </svg>
    );
  }
  if (str === 'clear-night') {
    return (
      <svg
        className="clear-night"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998
	c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788
	c0,4.418,3.582,7.999,8,7.999c0.615,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208
	C61.998,56.626,56.626,61.998,50,61.998z M48.212,42.208c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999
	c3.802,0,6.978-2.655,7.791-6.211C52.937,50.884,49.115,47.062,48.212,42.208z"
        />
      </svg>
    );
  }
  if (str === 'partly-cloudy-day') {
    return (
      <svg
        className="partly-cloudy-day"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.941,43.641h-4c-1.104,0-2-0.895-2-2c0-1.104,0.896-1.998,2-1.998h4
	c1.104,0,2,0.895,2,1.998C81.941,42.746,81.045,43.641,79.941,43.641z M72.084,30.329c-0.781,0.781-2.047,0.781-2.828,0
	c-0.781-0.78-0.781-2.047,0-2.827l2.828-2.828c0.781-0.781,2.047-0.781,2.828,0c0.781,0.78,0.781,2.047,0,2.828L72.084,30.329z
	 M69.137,45.936L69.137,45.936c1.749,2.086,2.806,4.77,2.806,7.705c0,6.625-5.372,11.998-11.999,11.998c-2.775,0-12.801,0-15.998,0
	c-8.835,0-15.998-7.162-15.998-15.998s7.163-15.998,15.998-15.998c1.572,0,3.09,0.232,4.523,0.654
	c2.195-2.827,5.618-4.654,9.475-4.654c6.627,0,11.999,5.373,11.999,11.998C69.942,43.156,69.649,44.602,69.137,45.936z
	 M31.947,49.641c0,6.627,5.371,11.998,11.998,11.998c3.616,0,12.979,0,15.998,0c4.418,0,7.999-3.582,7.999-7.998
	c0-4.418-3.581-8-7.999-8c-1.6,0-3.083,0.482-4.333,1.291c-1.231-5.316-5.974-9.289-11.665-9.289
	C37.318,37.643,31.947,43.014,31.947,49.641z M57.943,33.643c-2.212,0-4.215,0.898-5.662,2.349c2.34,1.436,4.285,3.453,5.629,5.854
	c0.664-0.113,1.337-0.205,2.033-0.205c2.125,0,4.119,0.559,5.85,1.527l0,0c0.096-0.494,0.15-1.004,0.15-1.527
	C65.943,37.225,62.361,33.643,57.943,33.643z M57.943,25.643c-1.104,0-1.999-0.895-1.999-1.999v-3.999c0-1.105,0.896-2,1.999-2
	c1.105,0,2,0.895,2,2v3.999C59.943,24.749,59.049,25.643,57.943,25.643z M43.803,30.329l-2.827-2.827
	c-0.781-0.781-0.781-2.048,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.828,2.828c0.781,0.78,0.781,2.047,0,2.827
	C45.851,31.11,44.584,31.11,43.803,30.329z"
        />
      </svg>
    );
  }
  if (str === 'partly-cloudy-night') {
    return (
      <svg
        className="partly-cloudy-night"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.763,46.758L69.763,46.758c1.368,1.949,2.179,4.318,2.179,6.883
	c0,6.625-5.371,11.998-11.998,11.998c-2.775,0-12.801,0-15.998,0c-8.836,0-15.998-7.162-15.998-15.998s7.162-15.998,15.998-15.998
	c2.002,0,3.914,0.375,5.68,1.047l0,0c1.635-4.682,6.078-8.047,11.318-8.047c0.755,0,1.491,0.078,2.207,0.212
	c-0.131,0.575-0.207,1.173-0.207,1.788c0,4.418,3.581,7.999,7.998,7.999c0.616,0,1.213-0.076,1.789-0.208
	c0.133,0.717,0.211,1.453,0.211,2.208C72.941,41.775,71.73,44.621,69.763,46.758z M31.947,49.641
	c0,6.627,5.371,11.998,11.998,11.998c3.616,0,12.979,0,15.998,0c4.418,0,7.999-3.582,7.999-7.998c0-4.418-3.581-8-7.999-8
	c-1.6,0-3.083,0.482-4.334,1.291c-1.231-5.316-5.973-9.29-11.664-9.29C37.318,37.642,31.947,43.014,31.947,49.641z M51.496,35.545
	c0.001,0,0.002,0,0.002,0S51.497,35.545,51.496,35.545z M59.155,30.85c-2.9,0.664-5.175,2.91-5.925,5.775l0,0
	c1.918,1.372,3.523,3.152,4.68,5.22c0.664-0.113,1.337-0.205,2.033-0.205c2.618,0,5.033,0.85,7.005,2.271l0,0
	c0.858-0.979,1.485-2.168,1.786-3.482C63.881,39.525,60.059,35.706,59.155,30.85z"
        />
      </svg>
    );
  }
}
