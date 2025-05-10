import { useTheme } from '@/context/ThemeContext';
import { decadeFonts } from '@/styles/fonts';

export function useDecadeFonts() {
    const { currentDecade } = useTheme();
    return decadeFonts[currentDecade] || decadeFonts['2020s'];
}
