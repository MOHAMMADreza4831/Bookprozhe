import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { Container, PaletteMode } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";


// --------------------------- css
import "react-toastify/dist/ReactToastify.css";
import 'swiper/css';

// --------------------------- utiles
import theme from "../theme/theme";
import palettes from '../theme/colors/colors.json';
import queryClient from '../utils/queryClient';
// import SideBar "@src/components/shared/sideBar";




interface IProps {
    defaultPalette?: PaletteMode; // this have used only for storybook
    children: ReactNode
}


export const ThemeLayout = ({ defaultPalette,children }: IProps) => {

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const [theTheme, ] = useState<PaletteMode>('light');
    useEffect(() => {
        const style = document.createElement('style');
        const colors = palettes[defaultPalette ?? theTheme];
        style.innerHTML = `
            :root {
              --color-primary-main: ${colors.primary.main};
              --color-primary-dark: ${colors.primary.dark};
              --color-primary-light: ${colors.primary.light};
              --color-primary-contrastText: ${colors.primary.contrastText};
              --color-primary-50: ${colors.primary[50]};
              --color-primary-100: ${colors.primary[100]};
              --color-primary-200: ${colors.primary[200]};
              --color-primary-300: ${colors.primary[300]};
              --color-primary-400: ${colors.primary[400]};
              --color-primary-500: ${colors.primary[500]};
              --color-primary-600: ${colors.primary[600]};
              --color-primary-700: ${colors.primary[700]};
              --color-primary-800: ${colors.primary[800]};
              --color-primary-900: ${colors.primary[900]};
      
          
              --color-secondary-main: ${colors.secondary.main};
              --color-secondary-dark: ${colors.secondary.dark};
              --color-secondary-light: ${colors.secondary.light};
              --color-secondary-contrastText: ${colors.secondary.contrastText};
              --color-secondary-50: ${colors.secondary[50]};
              --color-secondary-100: ${colors.secondary[100]};
              --color-secondary-200: ${colors.secondary[200]};
              --color-secondary-300: ${colors.secondary[300]};
              --color-secondary-400: ${colors.secondary[400]};
              --color-secondary-500: ${colors.secondary[500]};
              --color-secondary-600: ${colors.secondary[600]};
              --color-secondary-700: ${colors.secondary[700]};
              --color-secondary-800: ${colors.secondary[800]};
              --color-secondary-900: ${colors.secondary[900]};
         
          
              --color-error-main: ${colors.error.main};
              --color-error-dark: ${colors.error.dark};
              --color-error-light: ${colors.error.light};
              --color-error-contrastText: ${colors.error.contrastText};
              --color-error-50: ${colors.error[50]};
              --color-error-100: ${colors.error[100]};
              --color-error-200: ${colors.error[200]};
              --color-error-300: ${colors.error[300]};
              --color-error-400: ${colors.error[400]};
              --color-error-500: ${colors.error[500]};
              --color-error-600: ${colors.error[600]};
              --color-error-700: ${colors.error[700]};
              --color-error-800: ${colors.error[800]};
              --color-error-900: ${colors.error[900]};
              --color-error-A100: ${colors.error.A100};
              --color-error-A200: ${colors.error.A200};
              --color-error-A400: ${colors.error.A400};
              --color-error-A700: ${colors.error.A700};
          
              --color-warning-main: ${colors.warning.main};
              --color-warning-dark: ${colors.warning.dark};
              --color-warning-light: ${colors.warning.light};
              --color-warning-contrastText: ${colors.warning.contrastText};
              --color-warning-50: ${colors.warning[50]};
              --color-warning-100: ${colors.warning[100]};
              --color-warning-200: ${colors.warning[200]};
              --color-warning-300: ${colors.warning[300]};
              --color-warning-400: ${colors.warning[400]};
              --color-warning-500: ${colors.warning[500]};
              --color-warning-600: ${colors.warning[600]};
              --color-warning-700: ${colors.warning[700]};
              --color-warning-800: ${colors.warning[800]};
              --color-warning-900: ${colors.warning[900]};
              --color-warning-A100: ${colors.warning.A100};
              --color-warning-A200: ${colors.warning.A200};
              --color-warning-A400: ${colors.warning.A400};
              --color-warning-A700: ${colors.warning.A700};
          
              --color-success-main: ${colors.success.main};
              --color-success-dark: ${colors.success.dark};
              --color-success-light: ${colors.success.light};
              --color-success-contrastText: ${colors.success.contrastText};
              --color-success-50: ${colors.success[50]};
              --color-success-100: ${colors.success[100]};
              --color-success-200: ${colors.success[200]};
              --color-success-300: ${colors.success[300]};
              --color-success-400: ${colors.success[400]};
              --color-success-500: ${colors.success[500]};
              --color-success-600: ${colors.success[600]};
              --color-success-700: ${colors.success[700]};
              --color-success-800: ${colors.success[800]};
              --color-success-900: ${colors.success[900]};
              --color-success-A100: ${colors.success.A100};
              --color-success-A200: ${colors.success.A200};
              --color-success-A400: ${colors.success.A400};
              --color-success-A700: ${colors.success.A700};
          
              --color-info-main: ${colors.info.main};
              --color-info-dark: ${colors.info.dark};
              --color-info-light: ${colors.info.light};
              --color-info-contrastText: ${colors.info.contrastText};
              --color-info-50: ${colors.info[50]};
              --color-info-100: ${colors.info[100]};
              --color-info-200: ${colors.info[200]};
              --color-info-300: ${colors.info[300]};
              --color-info-400: ${colors.info[400]};
              --color-info-500: ${colors.info[500]};
              --color-info-600: ${colors.info[600]};
              --color-info-700: ${colors.info[700]};
              --color-info-800: ${colors.info[800]};
              --color-info-900: ${colors.info[900]};
              --color-info-A100: ${colors.info.A100};
              --color-info-A200: ${colors.info.A200};
              --color-info-A400: ${colors.info.A400};
              --color-info-A700: ${colors.info.A700};
          
              --color-grey-50: ${colors.grey[50]};
              --color-grey-100: ${colors.grey[100]};
              --color-grey-200: ${colors.grey[200]};
              --color-grey-300: ${colors.grey[300]};
              --color-grey-400: ${colors.grey[400]};
              --color-grey-500: ${colors.grey[500]};
              --color-grey-600: ${colors.grey[600]};
              --color-grey-700: ${colors.grey[700]};
              --color-grey-800: ${colors.grey[800]};
              --color-grey-900: ${colors.grey[900]};
              --color-grey-A100: ${colors.grey.A100};
              --color-grey-A200: ${colors.grey.A200};
              --color-grey-A400: ${colors.grey.A400};
              --color-grey-A700: ${colors.grey.A700};
          
              --color-text-primary: ${colors.text.primary};
              --color-text-secondary: ${colors.text.secondary};
              --color-text-disabled: ${colors.text.disabled};
          
              --color-background-default: ${colors.background.default};
              --color-background-paper: ${colors.background.paper};
              --color-background-ai: ${colors.background.ai};
          
              --color-action-active: ${colors.action.active}; 
              --color-action-hover: ${colors.action.hover};
              --color-action-selected: ${colors.action.selected};
              --color-action-disabled: ${colors.action.disabled};
              --color-action-disabledBackground: ${colors.action.disabledBackground};
              --color-action-focus: ${colors.action.focus};
              --color-action-hoverOpacity: ${colors.action.hoverOpacity};
              --color-action-disabledOpacity: ${colors.action.disabledOpacity};
            }
          `;

        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [theTheme, defaultPalette]);





    return (
        <QueryClientProvider client={queryClient}>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <ToastContainer
                        rtl
                        position="bottom-center"
                        autoClose={3000}
                        limit={3}
                        draggablePercent={80}
                        draggable
                    />
                    <CssBaseline />


                    {/* <Box sx={{ display: 'flex' }}> */}
                    {/* <SideBar /> */}


                    <Container maxWidth='xs' className=" pb-24 p-0 " component="main" sx={{ minHeight: "100vh", backgroundColor: 'white', zIndex:"0" }}>
                        {children}
                        {/*<BottomNavigator />*/}
                    </Container>

                    {/* </Box> */}


                </ThemeProvider>
            </CacheProvider>
        </QueryClientProvider>
    )
}

export default ThemeLayout;
