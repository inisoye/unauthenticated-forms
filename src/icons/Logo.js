import styled from 'styled-components';

const StyledLogo = styled.svg`
  height: 50px;
  width: 37px;
`;

function Logo() {
  return (
    <StyledLogo
      xmlns="http://www.w3.org/2000/svg"
      width="350"
      height="473"
      fill="none"
      viewBox="0 0 350 473"
    >
      <path
        fill="#CB1C37"
        d="M38.426 472.66c-7.32 0-13.906-1.53-19.762-4.591-5.789-3.127-10.347-7.452-13.674-12.975S0 443.317 0 436.33c0-6.986 1.663-13.241 4.99-18.764 3.327-5.522 7.885-9.814 13.674-12.875C24.52 401.564 31.107 400 38.426 400c6.388 0 12.144 1.131 17.267 3.393 5.123 2.263 9.382 5.523 12.776 9.782l-12.576 11.378c-4.525-5.456-10.014-8.184-16.469-8.184-3.792 0-7.186.831-10.18 2.495-2.928 1.663-5.223 4.025-6.887 7.086-1.597 2.994-2.395 6.454-2.395 10.38 0 3.926.798 7.419 2.395 10.48 1.664 2.994 3.96 5.323 6.887 6.987 2.994 1.663 6.388 2.495 10.18 2.495 6.455 0 11.944-2.728 16.469-8.184l12.576 11.378c-3.394 4.258-7.652 7.519-12.776 9.781-5.123 2.262-10.88 3.393-17.267 3.393zm90.454-16.668v15.271H72.788v-69.866h54.795v15.271H92.351v11.777h31.04v14.772h-31.04v12.775h36.529zm69.555 15.271l-.2-37.029-17.965 30.142h-8.783l-17.866-29.144v36.031h-18.265v-69.866h16.269l24.553 40.323 23.954-40.323H216.4l.2 69.866h-18.165zm62.489 1.397c-7.319 0-13.906-1.53-19.762-4.591-5.789-3.127-10.346-7.452-13.673-12.975s-4.991-11.777-4.991-18.764c0-6.986 1.664-13.241 4.991-18.764 3.327-5.522 7.884-9.814 13.673-12.875 5.856-3.127 12.443-4.691 19.762-4.691 6.388 0 12.144 1.131 17.267 3.393 5.124 2.263 9.382 5.523 12.776 9.782l-12.576 11.378c-4.525-5.456-10.014-8.184-16.469-8.184-3.792 0-7.186.831-10.18 2.495-2.927 1.663-5.223 4.025-6.887 7.086-1.597 2.994-2.395 6.454-2.395 10.38 0 3.926.798 7.419 2.395 10.48 1.664 2.994 3.96 5.323 6.887 6.987 2.994 1.663 6.388 2.495 10.18 2.495 6.455 0 11.944-2.728 16.469-8.184l12.576 11.378c-3.394 4.258-7.652 7.519-12.776 9.781-5.123 2.262-10.879 3.393-17.267 3.393zm58.135 0c-5.655 0-11.144-.698-16.468-2.096-5.323-1.397-9.647-3.26-12.975-5.589l6.488-14.572c3.128 2.063 6.754 3.726 10.879 4.991 4.126 1.264 8.184 1.896 12.176 1.896 7.586 0 11.378-1.896 11.378-5.689 0-1.996-1.098-3.46-3.293-4.392-2.129-.998-5.59-2.029-10.38-3.094-5.256-1.131-9.648-2.329-13.175-3.593-3.526-1.331-6.553-3.427-9.083-6.288-2.528-2.861-3.792-6.72-3.792-11.578 0-4.258 1.164-8.084 3.493-11.477 2.33-3.46 5.789-6.189 10.38-8.185 4.658-1.996 10.347-2.994 17.067-2.994 4.591 0 9.117.532 13.574 1.597 4.459.998 8.384 2.495 11.778 4.491l-6.089 14.672c-6.653-3.593-13.108-5.39-19.363-5.39-3.925 0-6.787.599-8.583 1.797-1.797 1.131-2.695 2.628-2.695 4.491 0 1.864 1.065 3.261 3.194 4.192 2.13.932 5.556 1.897 10.28 2.895 5.324 1.131 9.716 2.362 13.175 3.693 3.527 1.264 6.554 3.327 9.082 6.188 2.595 2.794 3.893 6.62 3.893 11.478 0 4.192-1.164 7.984-3.493 11.378-2.329 3.393-5.822 6.121-10.48 8.184-4.657 1.996-10.313 2.994-16.968 2.994z"
      ></path>
      <path
        fill="#0056A2"
        d="M50.512 66.604c-2.65 1.292-7.999 2.885-15.933 2.885C12.61 69.489 0 54.377 0 35.098 0 12.146 16.066 0 36.038 0c7.743 0 11.835 1.482 14.47 2.882l-2.441 13.726c-2.934-1.3-6.048-2.482-11.425-2.482-9.512 0-19.601 5.656-19.601 20.718 0 13.474 8.045 20.6 19.68 20.6 4.609 0 7.737-.903 11.347-2.56l2.444 13.72zM86.994 17.022c-5.919 0-11.647 2.683-14.563 6.993h-.18V.24L57.365 5.395v62.027h14.888V38.448c0-4.184 2.72-8.684 7.936-8.684 5.58 0 7.73 4.393 7.73 10.783v26.876h14.901V38.492c0-14.769-6.334-21.47-15.825-21.47zM125.278 47.854c.548 6.283 5.759 9.621 13.811 9.693 4.853.038 10.494-1.373 14.253-3.587l2.246 11.587c-5.657 2.841-12.119 3.942-18.697 3.942-17.721 0-27.22-10.659-27.22-26.988 0-15.795 10.214-25.987 25.519-25.987 15.774 0 22.845 11.614 22.845 26.166 0 1.533-.189 4.03-.358 5.174h-32.399zm17.887-10.595c0-3.648-1.78-10.029-8.673-10.029-6.043 0-8.893 5.202-9.316 10.03h17.989zM175.536 67.422l-16.451-48.836h16.426l8.937 34.545h.301l8.938-34.545h16.432L193.67 67.422h-18.134zM214.34 34.647c0-7.185-.225-11.872-.531-16.062h14.026l.425 9.078h.377c2.454-7.185 7.165-9.914 12.01-10.19 2.303-.133 3.55.03 4.976.306v14.279c-1.365-.267-4.073-.582-5.977-.407-5.73.527-9.197 4.695-10.17 9.492-.195.995-.296 2.098-.296 3.39v22.888h-14.834V34.647h-.006zM297.944 43c0 16.007-9.644 26.488-25.27 26.488-15.63 0-25.281-10.481-25.281-26.487 0-16.008 9.651-26.488 25.281-26.488 15.626 0 25.27 10.48 25.27 26.488zm-15.436 0c0-7.946-2.731-14.864-9.834-14.864-7.113 0-9.831 6.917-9.831 14.865 0 7.954 2.718 14.861 9.831 14.861 7.105 0 9.834-6.907 9.834-14.861zM304.565 34.156c0-6.095-.223-11.298-.538-15.57h14.026l.321 6.833h.301c1.942-3.178 7.082-8.397 15.102-8.397 9.816 0 16.223 6.701 16.223 21.077v29.324h-14.875v-27.08c0-6.284-2.156-10.58-7.539-10.58-4.128 0-6.691 2.903-7.642 5.685-.353 1.019-.496 2.403-.496 3.8v28.174h-14.883V34.156z"
      ></path>
      <path
        fill="url(#paint0_linear)"
        d="M.531 196.883V80.409l174.755 58.24L.531 196.883z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M.576 196.891l174.71 58.234 174.7-58.234V80.423l-174.7 58.226L.576 196.891z"
      ></path>
      <path
        fill="url(#paint2_linear)"
        d="M.542 332.27L.527 215.759l174.743 58.236L.542 332.27z"
      ></path>
      <path
        fill="url(#paint3_linear)"
        d="M349.995 215.759l-174.759 58.218L.562 332.248l174.708 58.249 174.725-58.267V215.759z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="175.286"
          x2="67.782"
          y1="138.646"
          y2="-22.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06549B"></stop>
          <stop offset="0.55" stopColor="#2FA1D3"></stop>
          <stop offset="0.9" stopColor="#2FA1D3"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="0.576"
          x2="119.535"
          y1="185.244"
          y2="-135.953"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1371B1"></stop>
          <stop offset="0.05" stopColor="#2FA1D3"></stop>
          <stop offset="0.45" stopColor="#2FA1D3"></stop>
          <stop offset="0.6" stopColor="#06569C"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="175.27"
          x2="43.955"
          y1="274.014"
          y2="155.848"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9D1A36"></stop>
          <stop offset="0.4" stopColor="#9D1A36"></stop>
          <stop offset="0.6" stopColor="#E6192F"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="0.562"
          x2="119.559"
          y1="320.601"
          y2="-0.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A21C38"></stop>
          <stop offset="0.13" stopColor="#E6192F"></stop>
          <stop offset="0.45" stopColor="#E6192F"></stop>
          <stop offset="0.6" stopColor="#A71C37"></stop>
        </linearGradient>
      </defs>
    </StyledLogo>
  );
}

export default Logo;