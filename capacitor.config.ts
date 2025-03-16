import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';
const config: CapacitorConfig = {
  appId: 'com.investofarms.app',
  appName: 'InvestoFarms',
  webDir: 'www/browser',
  plugins:{
    Keyboard:{
      resize:KeyboardResize.None,
    }
  }
};

export default config;
