import {
  createContext,
  Dispatch,
  MutableRefObject,
  SetStateAction,
} from 'react'

import { ConnectionTestResults } from 'components/Shell/useConnectionTest'
import { TrackerConnection } from 'lib/ConnectionTest'
import { PeerConnectionType, PeerRoom } from 'lib/PeerRoom'
import {
  AudioChannel,
  AudioChannelName,
  AudioState,
  InlineMedia,
  Message,
  Peer,
  PeerAudioChannelState,
  ScreenShareState,
  VideoState,
} from 'models/chat'
import { AlertOptions } from 'models/shell'

export type MessageLog = (Message | InlineMedia)[]

export interface ShellMessageLog {
  groupMessageLog: MessageLog
  directMessageLog: Record<string, MessageLog>
}

export interface ShellContextProps {
  isEmbedded: boolean
  tabHasFocus: boolean
  showRoomControls: boolean
  setShowRoomControls: Dispatch<SetStateAction<boolean>>
  setTitle: Dispatch<SetStateAction<string>>
  showAlert: (message: string, options?: AlertOptions) => void
  roomId?: string
  setRoomId: Dispatch<SetStateAction<string | undefined>>
  password?: string
  setPassword: Dispatch<SetStateAction<string | undefined>>
  isPeerListOpen: boolean
  setIsPeerListOpen: Dispatch<SetStateAction<boolean>>
  peerList: Peer[]
  setPeerList: Dispatch<SetStateAction<Peer[]>>
  isServerConnectionFailureDialogOpen: boolean
  setIsServerConnectionFailureDialogOpen: Dispatch<SetStateAction<boolean>>
  peerConnectionTypes: Record<string, PeerConnectionType>
  setPeerConnectionTypes: Dispatch<
    SetStateAction<Record<string, PeerConnectionType>>
  >
  audioChannelState: PeerAudioChannelState
  setAudioChannelState: Dispatch<SetStateAction<PeerAudioChannelState>>
  videoState: VideoState
  setVideoState: Dispatch<SetStateAction<VideoState>>
  screenState: ScreenShareState
  setScreenState: Dispatch<SetStateAction<ScreenShareState>>
  peerAudioChannels: Record<string, AudioChannel>
  setPeerAudioChannels: Dispatch<SetStateAction<Record<string, AudioChannel>>>
  customUsername: string
  setCustomUsername: Dispatch<SetStateAction<string>>
  connectionTestResults: ConnectionTestResults
  updatePeer: (peerId: string, updatedProperties: Partial<Peer>) => void
  peerRoomRef: MutableRefObject<PeerRoom | null>
  messageLog: ShellMessageLog
  setMessageLog: (messageLog: MessageLog, targetPeerId: string | null) => void
}

export const ShellContext = createContext<ShellContextProps>({
  isEmbedded: false,
  tabHasFocus: true,
  showRoomControls: false,
  setShowRoomControls: () => {},
  setTitle: () => {},
  showAlert: () => {},
  roomId: undefined,
  setRoomId: () => {},
  password: undefined,
  setPassword: () => {},
  isPeerListOpen: false,
  setIsPeerListOpen: () => {},
  peerList: [],
  setPeerList: () => {},
  isServerConnectionFailureDialogOpen: false,
  setIsServerConnectionFailureDialogOpen: () => {},
  peerConnectionTypes: {},
  setPeerConnectionTypes: () => {},
  audioChannelState: {
    [AudioChannelName.MICROPHONE]: AudioState.STOPPED,
    [AudioChannelName.SCREEN_SHARE]: AudioState.STOPPED,
  },
  setAudioChannelState: () => {},
  videoState: VideoState.STOPPED,
  setVideoState: () => {},
  screenState: ScreenShareState.NOT_SHARING,
  setScreenState: () => {},
  peerAudioChannels: {},
  setPeerAudioChannels: () => {},
  customUsername: '',
  setCustomUsername: () => {},
  connectionTestResults: {
    hasHost: false,
    hasRelay: false,
    trackerConnection: TrackerConnection.SEARCHING,
  },
  updatePeer: () => {},
  peerRoomRef: { current: null },
  messageLog: { groupMessageLog: [], directMessageLog: {} },
  setMessageLog: () => {},
})
