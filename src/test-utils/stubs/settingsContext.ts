import { SettingsContextProps } from 'contexts/SettingsContext'
import { ColorMode, UserSettings } from 'models/settings'
import { encryption } from 'services/Encryption'

import { DEFAULT_SOUND } from 'config/soundNames'

export const userSettingsContextStubFactory = (
  userSettingsOverrides: Partial<UserSettings> = {}
) => {
  const userSettingsStub: SettingsContextProps = {
    updateUserSettings: () => Promise.resolve(),
    getUserSettings: () => ({
      userId: '',
      customUsername: '',
      colorMode: ColorMode.DARK,
      playSoundOnNewMessage: true,
      showNotificationOnNewMessage: true,
      showActiveTypingStatus: true,
      publicKey: encryption.cryptoKeyStub,
      privateKey: encryption.cryptoKeyStub,
      selectedSound: DEFAULT_SOUND,
      ...userSettingsOverrides,
    }),
  }

  return userSettingsStub
}
