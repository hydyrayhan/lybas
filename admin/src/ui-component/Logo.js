// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <svg width="87" height="21" viewBox="0 0 87 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.524 16.304H11.796V20H0.736V0.343999H5.524V16.304ZM30.9358 0.343999L24.1318 13.504V20H19.3438V13.504L12.5398 0.343999H17.9718L21.7798 8.576L25.5598 0.343999H30.9358ZM44.7649 9.92C45.9036 10.1627 46.8182 10.732 47.5089 11.628C48.1996 12.5053 48.5449 13.5133 48.5449 14.652C48.5449 16.2947 47.9662 17.6013 46.8089 18.572C45.6702 19.524 44.0742 20 42.0209 20H32.8649V0.343999H41.7129C43.7102 0.343999 45.2689 0.801332 46.3889 1.716C47.5276 2.63067 48.0969 3.872 48.0969 5.44C48.0969 6.59733 47.7889 7.55867 47.1729 8.324C46.5756 9.08933 45.7729 9.62133 44.7649 9.92ZM37.6529 8.296H40.7889C41.5729 8.296 42.1702 8.128 42.5809 7.792C43.0102 7.43733 43.2249 6.924 43.2249 6.252C43.2249 5.58 43.0102 5.06667 42.5809 4.712C42.1702 4.35733 41.5729 4.18 40.7889 4.18H37.6529V8.296ZM41.1809 16.136C41.9836 16.136 42.5996 15.9587 43.0289 15.604C43.4769 15.2307 43.7009 14.6987 43.7009 14.008C43.7009 13.3173 43.4676 12.776 43.0009 12.384C42.5529 11.992 41.9276 11.796 41.1249 11.796H37.6529V16.136H41.1809ZM63.5579 16.528H56.2219L55.0459 20H50.0339L57.1459 0.343999H62.6899L69.8019 20H64.7339L63.5579 16.528ZM62.3259 12.832L59.8899 5.636L57.4819 12.832H62.3259ZM79.0785 20.196C77.6411 20.196 76.3531 19.9627 75.2145 19.496C74.0758 19.0293 73.1611 18.3387 72.4705 17.424C71.7985 16.5093 71.4438 15.408 71.4065 14.12H76.5025C76.5771 14.848 76.8291 15.408 77.2585 15.8C77.6878 16.1733 78.2478 16.36 78.9385 16.36C79.6478 16.36 80.2078 16.2013 80.6185 15.884C81.0291 15.548 81.2345 15.0907 81.2345 14.512C81.2345 14.0267 81.0665 13.6253 80.7305 13.308C80.4131 12.9907 80.0118 12.7293 79.5265 12.524C79.0598 12.3187 78.3878 12.0853 77.5105 11.824C76.2411 11.432 75.2051 11.04 74.4025 10.648C73.5998 10.256 72.9091 9.67733 72.3305 8.912C71.7518 8.14667 71.4625 7.148 71.4625 5.916C71.4625 4.08667 72.1251 2.65867 73.4505 1.632C74.7758 0.586666 76.5025 0.0639997 78.6305 0.0639997C80.7958 0.0639997 82.5411 0.586666 83.8665 1.632C85.1918 2.65867 85.9011 4.096 85.9945 5.944H80.8145C80.7771 5.30933 80.5438 4.81467 80.1145 4.46C79.6851 4.08667 79.1345 3.9 78.4625 3.9C77.8838 3.9 77.4171 4.05867 77.0625 4.376C76.7078 4.67467 76.5305 5.11333 76.5305 5.692C76.5305 6.32667 76.8291 6.82133 77.4265 7.176C78.0238 7.53067 78.9571 7.91333 80.2265 8.324C81.4958 8.75333 82.5225 9.164 83.3065 9.556C84.1091 9.948 84.7998 10.5173 85.3785 11.264C85.9571 12.0107 86.2465 12.972 86.2465 14.148C86.2465 15.268 85.9571 16.2853 85.3785 17.2C84.8185 18.1147 83.9971 18.8427 82.9145 19.384C81.8318 19.9253 80.5531 20.196 79.0785 20.196Z" fill="#0E1217" />
    </svg>

    //  <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <path
    //     d="M33.085 26.4841V12.3839H37.9541C39.6408 12.3839 40.9202 12.7131 41.7922 13.3717C42.6642 14.0237 43.1002 14.9825 43.1002 16.2478C43.1002 16.9387 42.9251 17.5488 42.5751 18.0782C42.225 18.6011 41.7381 18.9853 41.1143 19.2306C41.8272 19.4114 42.3873 19.7761 42.7947 20.3249C43.2084 20.8737 43.4152 21.5452 43.4152 22.3392C43.4152 23.695 42.9888 24.7215 42.1359 25.4188C41.283 26.1161 40.0673 26.4712 38.4888 26.4841H33.085ZM35.9492 20.3443V24.1502H38.4028C39.0775 24.1502 39.6026 23.9888 39.9781 23.666C40.36 23.3367 40.551 22.8848 40.551 22.3102C40.551 21.0189 39.8922 20.3637 38.5747 20.3443H35.9492ZM35.9492 18.2912H38.0687C39.5135 18.2654 40.236 17.6811 40.236 16.5384C40.236 15.8992 40.0514 15.4408 39.6822 15.1632C39.3194 14.8792 38.7434 14.7371 37.9541 14.7371H35.9492V18.2912ZM53.9365 20.3733H48.4371V24.1502H54.8913V26.4841H45.573V12.3839H54.8723V14.7371H48.4371V18.0976H53.9365V20.3733ZM61.7175 21.3224H59.436V26.4841H56.5717V12.3839H61.7365C63.379 12.3839 64.6455 12.7551 65.5365 13.4975C66.4276 14.24 66.8734 15.2891 66.8734 16.6449C66.8734 17.6069 66.6661 18.4107 66.2527 19.0563C65.8455 19.6954 65.2248 20.2055 64.3907 20.5864L67.3985 26.3485V26.4841H64.3242L61.7175 21.3224ZM59.436 18.9691H61.746C62.4656 18.9691 63.0226 18.7851 63.417 18.4172C63.8114 18.0427 64.0092 17.5294 64.0092 16.8773C64.0092 16.2124 63.8214 15.6894 63.4455 15.3085C63.0768 14.9276 62.5069 14.7371 61.7365 14.7371H59.436V18.9691ZM74.2058 21.3224H71.9237V26.4841H69.0594V12.3839H74.2248C75.8667 12.3839 77.1337 12.7551 78.0248 13.4975C78.9159 14.24 79.3611 15.2891 79.3611 16.6449C79.3611 17.6069 79.1544 18.4107 78.7404 19.0563C78.3332 19.6954 77.7125 20.2055 76.879 20.5864L79.8863 26.3485V26.4841H76.8119L74.2058 21.3224ZM71.9237 18.9691H74.2343C74.9533 18.9691 75.5103 18.7851 75.9052 18.4172C76.2997 18.0427 76.4969 17.5294 76.4969 16.8773C76.4969 16.2124 76.3092 15.6894 75.9337 15.3085C75.5645 14.9276 74.9946 14.7371 74.2248 14.7371H71.9237V18.9691ZM85.8823 18.7367L88.7751 12.3839H91.9064L87.3427 21.3708V26.4841H84.4309V21.3708L79.8673 12.3839H83.008L85.8823 18.7367Z"
    //     fill={theme.palette.grey[900]}
    //   />
    //   <path
    //     d="M10.987 31.5841C4.92849 31.5841 0 26.626 0 20.5323C0 14.4385 4.92899 9.48041 10.987 9.48041C17.045 9.48041 21.974 14.4385 21.974 20.5323C21.974 26.626 17.0459 31.5841 10.987 31.5841ZM10.987 10.536C5.50765 10.536 1.04938 15.0196 1.04938 20.5318C1.04938 26.044 5.50765 30.5275 10.987 30.5275C16.4663 30.5275 20.9251 26.0429 20.9251 20.5308C20.9251 15.0186 16.4673 10.536 10.987 10.536Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M18.96 21.0225C18.6182 19.7483 15.4851 19.6108 13.6203 20.0779C12.6437 20.3235 11.6456 20.6428 10.6162 20.8265C11.3697 21.4989 12.1788 22.135 13.34 22.2932C16.2211 22.6842 18.0112 21.775 18.96 21.0225Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M13.34 22.2932C12.1764 22.135 11.3697 21.4989 10.6162 20.8265C9.45013 19.7857 8.41298 18.6579 6.37723 19.0823C3.14069 19.7572 2.71488 23.6081 5.21404 26.0828C6.28706 27.2131 7.66455 28.0041 9.17779 28.3586C10.691 28.7132 12.2742 28.616 13.7333 28.079C15.1924 27.5419 16.4641 26.5883 17.3925 25.3352C18.3209 24.0819 18.8656 22.5835 18.96 21.0235C18.0112 21.775 16.221 22.6842 13.34 22.2932Z"
    //     fill={theme.palette.secondary.main}
    //   />
    //   <path
    //     d="M15.034 13.9586C14.6301 14.8295 18.2304 15.7957 18.6611 18.6879C18.8687 15.8409 15.5335 12.882 15.034 13.9586Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M7.46619 17.5935C8.11524 17.3231 8.42345 16.5746 8.15463 15.9217C7.8858 15.2688 7.14167 14.9587 6.49262 15.2292C5.84357 15.4996 5.53536 16.2481 5.80418 16.9011C6.07306 17.5539 6.81714 17.8639 7.46619 17.5935Z"
    //     fill={theme.palette.secondary.main}
    //   />
    //   <path
    //     d="M10.3549 14.08C10.6585 13.7746 10.6585 13.2795 10.3549 12.9741C10.0513 12.6687 9.55909 12.6687 9.25551 12.9741C8.95194 13.2795 8.95194 13.7746 9.25551 14.08C9.55909 14.3854 10.0513 14.3854 10.3549 14.08Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M13.1014 9.05206C14.2245 5.7149 13.4696 3.04871 11.1614 1.78241C9.58359 2.10513 8.647 2.87335 8.12549 3.93383C11.2204 3.68185 13.1844 5.63041 13.1014 9.05206Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M25.6983 6.13641C20.1389 4.1294 16.6304 4.81756 16.0786 9.39055C19.2648 12.6973 22.474 11.1146 25.6983 6.13641Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M21.2765 4.32541C21.5343 3.21728 21.6681 1.90776 21.6881 0.41748C15.9226 1.70883 13.3224 4.17658 15.2839 8.33846C15.3816 8.36203 15.4754 8.38119 15.5696 8.40085C16.0281 5.14422 18.0463 3.93835 21.2765 4.32541Z"
    //     fill={theme.palette.primary.main}
    //   />
    // </svg>
  );
};

export default Logo;
