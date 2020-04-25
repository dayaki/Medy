import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

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
