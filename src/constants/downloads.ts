export type DownloadItem = {
  os: 'Windows' | 'macOS' | 'Linux';
  arch: string;
  version: string;
  url: string;
  filename: string;
};

export const DOWNLOADS: DownloadItem[] = [
  {
    os: 'Windows',
    arch: 'x64',
    version: '1.12.3',
    url: 'download/latest/isuncloud-gui-windows.zip',
    filename: 'isuncloud-gui-windows.zip',
  },
  {
    os: 'macOS',
    arch: 'Universal',
    version: '1.12.3',
    url: 'download/latest/isuncloud-gui-macos.dmg',
    filename: 'isuncloud-gui-macos.dmg',
  },
  {
    os: 'Linux',
    arch: 'x64',
    version: '1.12.3',
    url: 'download/latest/isuncloud-gui-linux.appimage',
    filename: 'isuncloud-gui-linux.appimage',
  },
];
