import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

export const ForwardIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 24 16" {...props}>
    <Path
      d="M22.5 8.999H1a1 1 0 110-1.998h20.17l-6-5.245A1.001 1.001 0 1116.49.248l7 6.114a1.498 1.498 0 01-1 2.627l.01.01zm-6.01 6.753l4-3.496a1.001 1.001 0 10-1.32-1.509l-4 3.497a1.001 1.001 0 101.32 1.508z"
      fill={props.fill ? props.fill : '#FFF'}
      fillRule="evenodd"
    />
  </Svg>
);

export const BackwardIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 24 16" {...props}>
    <Path
      d="M8.174 16a1 1 0 01-.66-.25l-7-6.117a1.499 1.499 0 011-2.629h21.49a1 1 0 110 2H2.834l6 5.247A1 1 0 018.174 16zM4.834 5.255l4-3.498a1.002 1.002 0 10-1.32-1.51l-4 3.499a1.002 1.002 0 101.32 1.51z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const HomeTabIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 24 21" {...props}>
    <Path
      d="M17.996 21h-2c-1.104 0-2-.914-2-2.043V11.81h-4v7.148c0 1.129-.895 2.043-2 2.043h-2c-1.656 0-3-1.372-3-3.064v-7.149a1.01 1.01 0 011-1.02c.553 0 1 .456 1 1.02v7.15a1.01 1.01 0 001 1.02h2V11.81c0-1.128.896-2.043 2-2.043h4c1.105 0 2 .915 2 2.043v7.148h2c.553 0 1-.457 1-1.02v-7.15a1.01 1.01 0 011-1.02c.553 0 1 .456 1 1.02v7.15c0 1.691-1.343 3.063-3 3.063zm5.84-12.725c.3-.471.17-1.1-.29-1.41L14.176.658a3.93 3.93 0 00-4.35 0L.456 6.866c-.463.307-.596.94-.295 1.414a.989.989 0 001.385.302l9.37-6.21a1.965 1.965 0 012.18 0l9.37 6.21a.987.987 0 001.38-.297l-.01-.01z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const SearchTabIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 21 23" {...props}>
    <Path
      d="M19.867 22.966c-.322 0-.629-.138-.842-.38l-4.334-4.888a9.61 9.61 0 01-8.909.684 9.549 9.549 0 01-5.599-6.936A9.572 9.572 0 014.725 1.335a9.653 9.653 0 0111.083.907 9.562 9.562 0 012.824 10.714c-.22.577-.869.868-1.448.649a1.117 1.117 0 01-.652-1.443 7.324 7.324 0 00-.792-6.7 7.384 7.384 0 00-5.945-3.233 7.266 7.266 0 00-5.794 2.595 7.327 7.327 0 00.086 9.53 7.397 7.397 0 009.459 1.432 2.252 2.252 0 012.84.47l4.335 4.887c.29.33.36.799.18 1.199-.182.4-.582.657-1.022.658l-.012-.034z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const ProfileTabIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 18 24" {...props}>
    <Path
      d="M15 24H5a1 1 0 010-2h10a1 1 0 001-1v-4.15a1.63 1.63 0 00-.89-1.31 16.32 16.32 0 00-12.22 0A1.63 1.63 0 002 16.85V23a1 1 0 01-2 0v-6.15a3.59 3.59 0 012.14-3.17 18.31 18.31 0 0113.72 0A3.59 3.59 0 0118 16.85V21a3 3 0 01-3 3zM14 5A5 5 0 104 5a5 5 0 0010 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const FilterIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 19 24" {...props}>
    <Path
      d="M6.333 22v-9.335a.966.966 0 00-.21-.6L.632 5.132A2.9 2.9 0 010 3.332V1c0-.552.473-1 1.056-1C1.639 0 2.11.448 2.11 1v2.331c0 .217.074.427.211.6l5.49 6.934a2.9 2.9 0 01.632 1.8V22l2.112-1.5v-7.834a2.9 2.9 0 01.633-1.8l5.489-6.933a.966.966 0 00.21-.6v-.33c0-.553-.472-1.001-1.055-1.001H5.278c-.583 0-1.056-.448-1.056-1C4.222.447 4.695 0 5.278 0h10.555C17.583 0 19 1.344 19 3.001v.33a2.9 2.9 0 01-.633 1.801l-5.49 6.933a.966.966 0 00-.21.6V20.5c0 .63-.313 1.222-.845 1.6l-2.11 1.5c-.366.26-.81.401-1.268.401-1.165 0-2.11-.896-2.11-2z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const AchieveIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 22 24" {...props}>
    <Path
      d="M12.75 24H8.38a1 1 0 110-2h3.37v-2.348a.57.57 0 00-.17-.41.79.79 0 00-.56-.22 7.928 7.928 0 01-8-7.837V3A3 3 0 016.02 0h10a3 3 0 013 2.999v8.186a7.736 7.736 0 01-3 6.128 1 1 0 11-1.23-1.57 5.757 5.757 0 002.24-4.548V3.01a1 1 0 00-1-1H6a1 1 0 00-1 1v8.186a5.929 5.929 0 006 5.838 2.81 2.81 0 012 .8c.486.48.76 1.135.76 1.819V23a1 1 0 01-1.01 1zM2 11.005V6.007a1 1 0 00-2 0v4.998a1 1 0 002 0zm20 0V6.007a1 1 0 00-2 0v4.998a1 1 0 002 0z"
      fill={props.fill ? props.fill : '#fff'}
      fillRule="evenodd"
    />
  </Svg>
);

export const BriefcaseIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 20 18" {...props}>
    <Path
      d="M17.5 18h-15C1.12 18 0 16.894 0 15.53V6.47C0 5.107 1.12 4 2.5 4h15C18.88 4 20 5.106 20 6.47v1.071c0 .694-.44 1.313-1.1 1.548l-8 2.875a2.528 2.528 0 01-1.842-.05L3.833 9.7a.82.82 0 01-.437-1.083.838.838 0 011.096-.432l5.225 2.215a.843.843 0 00.608 0l8-2.874v-1.07a.828.828 0 00-.833-.824H2.5a.828.828 0 00-.833.823v9.059c0 .455.373.823.833.823h15c.46 0 .833-.368.833-.823v-4.118c0-.455.373-.823.834-.823.46 0 .833.368.833.823v4.118a2.456 2.456 0 01-.726 1.758c-.47.466-1.108.729-1.774.729zM14 1c0-.552-.358-1-.8-1H6.8C6.358 0 6 .448 6 1s.358 1 .8 1h6.4c.442 0 .8-.448.8-1z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const JournalIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 18 20" {...props}>
    <Path
      d="M8.936 19.991a1.765 1.765 0 01-.978-.333c-1.991-1.412-4.427-1.925-6.773-1.426a.936.936 0 01-.83-.216A1.07 1.07 0 010 17.19V1.041C0 .466.438 0 .98 0h2.76C4.57 0 5.4.104 6.206.312c.337.1.598.385.685.746.087.361-.013.744-.264 1.005a.94.94 0 01-.95.259 8.09 8.09 0 00-2.183-.24H1.958v13.91c2.471-.239 4.946.422 7.018 1.875 2.071-1.453 4.546-2.114 7.017-1.874V2.145c-2.106-.249-4.227.3-5.99 1.551v10.1c0 .575-.438 1.041-.979 1.041-.54 0-.978-.466-.978-1.041v-10.6a1.066 1.066 0 01.381-.832C10.948.36 14.155-.398 17.237.28c.455.11.774.545.763 1.041v15.941a1.07 1.07 0 01-.355.826.936.936 0 01-.83.215c-2.346-.498-4.782.015-6.773 1.427-.333.208-.72.3-1.106.26z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const SettingIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 22 24" {...props}>
    <Path
      d="M11.482 24h-.994a2.985 2.985 0 01-2.863-2.188.996.996 0 111.919-.54.995.995 0 00.994.73h.994c.46.017.87-.285.994-.73l.457-1.668a1.995 1.995 0 011.104-1.29c.159-.07.318-.16.477-.25.159-.089.308-.189.457-.289a1.98 1.98 0 011.65-.32l1.68.43a.992.992 0 001.104-.47l.477-.829a1.003 1.003 0 00-.15-1.199l-1.212-1.229a2.004 2.004 0 01-.557-1.578 7.2 7.2 0 000-1.13c-.05-.579.153-1.152.557-1.568l1.213-1.24c.312-.32.373-.81.149-1.198l-.477-.83a.992.992 0 00-1.114-.47l-1.68.43a1.98 1.98 0 01-1.63-.31 6.949 6.949 0 00-.994-.559 1.996 1.996 0 01-1.074-1.269l-.467-1.688a.995.995 0 00-.994-.73h-.994a.995.995 0 00-.994.73l-.457 1.658a1.995 1.995 0 01-1.104 1.29c-.159.08-.328.16-.477.249-.15.09-.308.19-.457.29a1.98 1.98 0 01-1.65.32l-1.68-.43a.992.992 0 00-1.104.47l-.477.829c-.224.388-.163.878.149 1.199L3.47 9.852c.406.419.61.996.556 1.578a6.97 6.97 0 000 1.13c.05.579-.152 1.152-.556 1.568l-1.213 1.24c-.312.32-.373.81-.15 1.198l.478.83a.992.992 0 001.113.47c.345-.09.71.012.96.267a1.004 1.004 0 01-.463 1.67 2.976 2.976 0 01-3.32-1.408l-.477-.83a3.01 3.01 0 01.457-3.597l1.213-1.239a8.185 8.185 0 010-1.458L.895 10.01a3.009 3.009 0 01-.457-3.606l.477-.83a2.976 2.976 0 013.32-1.398l1.68.43a7.263 7.263 0 011.263-.74l.477-1.669A2.985 2.985 0 0110.528 0h.994a2.985 2.985 0 012.863 2.188l.467 1.689c.445.201.87.442 1.273.72l1.68-.42a2.976 2.976 0 013.32 1.408l.477.83a3.01 3.01 0 01-.457 3.597l-1.233 1.269c.043.485.043.973 0 1.458l1.203 1.25a3.009 3.009 0 01.457 3.606l-.477.83a2.976 2.976 0 01-3.32 1.398l-1.68-.43a7.263 7.263 0 01-1.263.74l-.477 1.669A2.985 2.985 0 0111.482 24zm4.454-11.99c0-2.76-2.226-4.996-4.97-4.996-2.746 0-4.971 2.237-4.971 4.996 0 2.76 2.225 4.996 4.97 4.996 2.745 0 4.97-2.237 4.97-4.996zm-1.989 0a2.99 2.99 0 01-2.982 2.997 2.99 2.99 0 01-2.982-2.997 2.99 2.99 0 012.982-2.998 2.99 2.99 0 012.982 2.998z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const AvatarIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 72 72" {...props}>
    <G transform="translate(1 1)" fill="none" fillRule="evenodd">
      <Circle fill="#000" cx={35} cy={35} r={29} />
      <Path
        d="M0 35c0 19.33 15.67 35 35 35s35-15.67 35-35S54.33 0 35 0"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M41 47H31a1 1 0 010-2h10a1 1 0 001-1v-4.15a1.63 1.63 0 00-.89-1.31 16.32 16.32 0 00-12.22 0 1.63 1.63 0 00-.89 1.31V46a1 1 0 01-2 0v-6.15a3.59 3.59 0 012.14-3.17 18.31 18.31 0 0113.72 0A3.59 3.59 0 0144 39.85V44a3 3 0 01-3 3zm-1-19a5 5 0 10-10 0 5 5 0 0010 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export const LightIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 20 13" {...props}>
    <Path
      d="M8.443 13c-1.368 0-2.477-1.026-2.477-2.291V5.362c0-.422-.37-.764-.825-.764a.806.806 0 00-.595.191.656.656 0 00-.223.489 2.368 2.368 0 01-.825 1.787 2.756 2.756 0 01-1.981.65l-.743-.046c-.456-.028-.802-.392-.772-.814.03-.422.423-.741.879-.714l.743.046a1.04 1.04 0 00.743-.245.878.878 0 00.314-.672 2.123 2.123 0 01.726-1.588 2.59 2.59 0 011.734-.627c1.367 0 2.476 1.026 2.476 2.292v5.346c0 .422.37.764.826.764.456 0 .825-.342.825-.764V2.291C9.268 1.026 10.377 0 11.745 0c1.368 0 2.476 1.026 2.476 2.291v6.11c0 .423.37.765.826.765.456 0 .825-.342.825-.764 0-1.266 1.11-2.292 2.477-2.292h.825c.456 0 .826.342.826.764s-.37.764-.826.764h-.825c-.456 0-.826.342-.826.764 0 1.265-1.108 2.291-2.476 2.291-1.368 0-2.477-1.026-2.477-2.291v-6.11c0-.422-.37-.764-.825-.764-.456 0-.826.342-.826.763v8.402a2.206 2.206 0 01-.72 1.63A2.581 2.581 0 018.444 13z"
      fill={props.fill ? props.fill : '#000'}
      fillRule="evenodd"
    />
  </Svg>
);

export const PlayIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 16 19" {...props}>
    <Path
      d="M.842 19A.843.843 0 010 18.157V2.53C0 1.627.48.791 1.263.34a2.525 2.525 0 012.528 0l10.95 6.35a2.53 2.53 0 010 4.376L4.633 16.968a.842.842 0 01-1.294-.723.843.843 0 01.452-.736l10.108-5.903a.843.843 0 000-1.459l-10.95-6.35a.842.842 0 00-1.264.734v15.626A.843.843 0 01.842 19z"
      fill="#000"
      fillRule="evenodd"
    />
  </Svg>
);

export const CloseIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <Path
      d="M10.617 11.52a1 1 0 01-.71-.29l-2.12-2.12a1 1 0 011.41-1.41l2.12 2.12a1 1 0 01-.71 1.71l.01-.01zm8.12 10.41a1.001 1.001 0 00-1.12-1.66 10.12 10.12 0 112.85-2.95 1 1 0 001.69 1.07 12 12 0 10-3.42 3.54zm-9.54-5.71l2.12-2.12a1 1 0 00-1.41-1.41l-2.12 2.12a1 1 0 101.41 1.41zm7.07 0a1 1 0 000-1.41l-2.12-2.12a1 1 0 10-1.41 1.41l2.12 2.12a1 1 0 001.41 0zm-2.12-4.95l2.12-2.12a1 1 0 00-1.41-1.41l-2.12 2.12a1 1 0 101.41 1.41z"
      fill="#000"
      fillRule="evenodd"
    />
  </Svg>
);

export const PreferenceIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 19 11" {...props}>
    <Path
      d="M6 1c-.74 0-1.396.55-1.629 1.368-.137.405-.484.66-.857.63H0m19-.996H8.505c-.376-.03-.725.225-.864.63C7.407 3.449 6.745 4 6 4m7 3c.734 0 1.386.55 1.617 1.368.136.405.48.66.851.63H19M13 10c-.747 0-1.411-.55-1.647-1.368-.139-.405-.49-.66-.866-.63H0"
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
    />
  </Svg>
);

export const NotificationIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 17 20" {...props}>
    <Path
      d="M6.226 19.442a.829.829 0 01-.47-.727.826.826 0 01.45-.738A.913.913 0 017.1 18c.73.398 1.616.439 2.384.11a2.526 2.526 0 001.49-1.775c.162-.795.9-1.364 1.75-1.349H15.2l-.604-2.298a.793.793 0 010-.2V7.72c.059-3.13-2.436-5.77-5.711-6.045-1.694-.109-3.359.457-4.598 1.562-1.238 1.105-1.94 2.65-1.936 4.266v4.996a.793.793 0 010 .2l-.603 2.297H8.5c.483 0 .875.373.875.833 0 .46-.392.833-.875.833H1.748a1.783 1.783 0 01-1.377-.64 1.604 1.604 0 01-.32-1.425l.577-2.198V7.51c-.004-2.077.897-4.063 2.488-5.483C4.708.607 6.848-.122 9.025.017c4.193.332 7.402 3.696 7.347 7.701v4.663l.577 2.198c.129.497.01 1.023-.32 1.426a1.783 1.783 0 01-1.377.639h-2.475c-.41 1.976-2.248 3.39-4.364 3.355a4.544 4.544 0 01-2.187-.557z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </Svg>
);

export const GoalIcon = props => (
  <Svg width="1em" height="1em" viewBox="0 0 20 16" {...props}>
    <Path
      d="M17.5 16h-15C1.12 16 0 14.806 0 13.333V9.778C0 8.796.746 8 1.667 8h1.666C4.253 8 5 8.796 5 9.778v1.778c0 .49-.373.888-.833.888-.46 0-.834-.398-.834-.888V9.778H1.667v3.555c0 .491.373.89.833.89h15c.46 0 .833-.399.833-.89V1.778h-1.666v9.778c0 .49-.373.888-.834.888-.46 0-.833-.398-.833-.888V1.778C15 .796 15.746 0 16.667 0h1.666C19.253 0 20 .796 20 1.778v11.555C20 14.806 18.88 16 17.5 16zm-5-4.375V7.25c0-.966-.746-1.75-1.667-1.75H9.167c-.92 0-1.667.784-1.667 1.75v4.375c0 .483.373.875.833.875.46 0 .834-.392.834-.875V7.25h1.666v4.375c0 .483.373.875.834.875.46 0 .833-.392.833-.875z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </Svg>
);

export const DurationIcon = props => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <Path
        d="M10.044 20a10 10 0 118.398-4.639.83.83 0 11-1.403-.888 8.299 8.299 0 10-2.365 2.448.83.83 0 11.93 1.378 9.958 9.958 0 01-5.56 1.7zm2.723-7.238a.832.832 0 000-1.155l-2.164-2.219v-4.57A.81.81 0 009.801 4 .81.81 0 009 4.819v5.249l2.637 2.694a.79.79 0 001.13 0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const PauseIcon = props => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 20" {...props}>
      <Path
        d="M5.143 20h-.857a.845.845 0 01-.857-.833c0-.46.383-.834.857-.834V1.667H1.714v17.5c0 .46-.383.833-.857.833A.845.845 0 010 19.167V.833C0 .373.384 0 .857 0h4.286C5.616 0 6 .373 6 .833v18.334c0 .46-.384.833-.857.833zM16 19.167V.833A.845.845 0 0015.143 0a.845.845 0 00-.857.833v17.5h-2.572V1.667a.845.845 0 00.857-.834.845.845 0 00-.857-.833h-.857A.845.845 0 0010 .833v18.334c0 .46.384.833.857.833h4.286a.845.845 0 00.857-.833z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const FocusIcon = props => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 20 12" {...props}>
      <Path
        d="M9.988 12A12.014 12.014 0 01.15 6.489.835.835 0 010 6.014a.91.91 0 01.15-.5A11.54 11.54 0 019.988 0a11.54 11.54 0 019.837 5.513.835.835 0 01-.602 1.343.832.832 0 01-.762-.392A10.375 10.375 0 009.988 1.67a10.257 10.257 0 00-8.132 4.335 10.257 10.257 0 008.132 4.336 9.686 9.686 0 006.134-2.251.831.831 0 011.138.146c.28.345.24.849-.09 1.146A11.333 11.333 0 019.988 12zM12.5 6A2.5 2.5 0 0010 3.5a.833.833 0 100 1.667.833.833 0 11-.833.833A.833.833 0 007.5 6a2.5 2.5 0 105 0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const LogoutIcon = props => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 20" {...props}>
      <Path
        d="M11.667 20H2.333C1.045 20 0 18.88 0 17.5v-15C0 1.12 1.045 0 2.333 0h9.334C12.955 0 14 1.12 14 2.5v.833c0 .46-.348.834-.778.834-.43 0-.778-.373-.778-.834V2.5c0-.46-.348-.833-.777-.833H2.333c-.43 0-.777.373-.777.833v15c0 .46.348.833.777.833h9.334c.43 0 .777-.373.777-.833v-.833c0-.46.349-.834.778-.834.43 0 .778.373.778.834v.833c0 1.38-1.045 2.5-2.333 2.5zm4.262-9.662a.74.74 0 00-.069-.75l-2.288-3a.77.77 0 00-1.067-.15.742.742 0 00-.153 1.05l1.373 1.762H6.862A.756.756 0 006.1 10c0 .414.341.75.762.75h8.388c.287 0 .55-.16.679-.412zm-2.357 3.112l.572-.75a.742.742 0 00-.152-1.05.77.77 0 00-1.068.15l-.572.75a.742.742 0 00.153 1.05.77.77 0 001.067-.15z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const ContactIcon = props => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <Path
        d="M3.422 13.886C.476 9.815-1.312 4.507 1.184 2.701L2.912 1.43a2.202 2.202 0 011.771-.38c.56.123 1.038.482 1.313.985l1.633 3.19a.865.865 0 01-1.538.786L4.467 2.84a.25.25 0 00-.164-.104.475.475 0 00-.38.087l-1.728 1.27c-1.02.744-.518 4.435 2.592 8.774 3.11 4.34 6.496 5.965 7.516 5.187l1.727-1.271c.115-.077.19-.2.208-.337a.25.25 0 00-.06-.208l-1.789-1.806a.864.864 0 00-.864-.225l-1.21.32a2.59 2.59 0 01-2.591-.804l-.475-.553a19.95 19.95 0 01-2.03-2.81L4.32 8.838a.865.865 0 111.486-.864L6.73 9.52a18.222 18.222 0 001.858 2.593l.475.553a.864.864 0 00.864.268l1.21-.32a2.59 2.59 0 012.505.683l1.805 1.824c.4.418.598.99.544 1.565a2.205 2.205 0 01-.907 1.573l-1.727 1.27c-.48.328-1.053.492-1.633.468-2.531 0-5.918-2.818-8.302-6.112zM15.803 8.41a3.357 3.357 0 00-.358-2.983A3.16 3.16 0 0012.875 4a.887.887 0 00-.875.9c0 .497.391.9.874.9.465.008.898.248 1.16.643.262.395.322.897.16 1.345a.922.922 0 00.15.888c.2.247.514.366.822.31a.882.882 0 00.672-.577h-.035zm3.683 2.029c.928-2.356.586-4.99-.917-7.065C17.065 1.298 14.587.04 11.922 0c-.51 0-.922.39-.922.87s.413.87.922.87c2.066.03 3.987 1.005 5.153 2.613 1.166 1.608 1.432 3.65.713 5.476-.175.451.07.952.55 1.117.478.166 1.009-.066 1.184-.517l-.036.009z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const DocumentIcon = props => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 15 20" {...props}>
      <Path
        d="M12.5 20H4.167a.833.833 0 110-1.667H12.5c.46 0 .833-.373.833-.833V5.692a.833.833 0 00-.241-.592L9.9 1.908a.833.833 0 00-.592-.241H2.5a.833.833 0 00-.833.833v16.667a.833.833 0 01-1.667 0V2.5A2.5 2.5 0 012.5 0h6.808a2.5 2.5 0 011.767.733l3.192 3.192A2.5 2.5 0 0115 5.692V17.5a2.5 2.5 0 01-2.5 2.5z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  );
};
