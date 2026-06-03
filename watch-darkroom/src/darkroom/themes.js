// 游戏 UI 配色主题（仅作用于游戏界面，不影响设置页）
// 每套主题都尽量护眼、对比适中
export var THEMES = [
  {
    name: '经典暗夜',
    bg: '#000000', text: '#ffffff', dim: '#888888',
    btnBg: '#1a1a1a', btnBorder: '#333333',
    accent: '#c8a000', divider: '#222222',
    gain: '#4caf50', lose: '#e05050'
  },
  {
    name: '护眼墨绿',
    bg: '#0b1a14', text: '#d6f0e2', dim: '#5e8a76',
    btnBg: '#10271d', btnBorder: '#1f4533',
    accent: '#39d98a', divider: '#173326',
    gain: '#52e0a0', lose: '#e07a7a'
  },
  {
    name: '深海青',
    bg: '#06151f', text: '#cfeaf2', dim: '#5b8392',
    btnBg: '#0c2530', btnBorder: '#1c4250',
    accent: '#34c8e0', divider: '#143038',
    gain: '#4fd6c0', lose: '#e08080'
  },
  {
    name: '暖褐羊皮',
    bg: '#1a130c', text: '#f0e2c8', dim: '#9a8460',
    btnBg: '#291f14', btnBorder: '#473826',
    accent: '#e0a850', divider: '#332617',
    gain: '#9cc060', lose: '#e09060'
  },
  {
    name: '午夜蓝',
    bg: '#0a0f1f', text: '#dbe2f5', dim: '#6a7299',
    btnBg: '#141b30', btnBorder: '#283050',
    accent: '#6c8cff', divider: '#1c2440',
    gain: '#6fcf97', lose: '#e07a8a'
  },
  {
    name: '护眼米白',
    bg: '#f3ecdd', text: '#2a2722', dim: '#8a8070',
    btnBg: '#e6dcc6', btnBorder: '#cbbd9c',
    accent: '#b07a2a', divider: '#d8cdb4',
    gain: '#3a8a3a', lose: '#b03a3a'
  }
]

export var SPEEDS = [
  { label: '1.0x', value: 1.0 },
  { label: '1.2x', value: 1.2 },
  { label: '1.5x', value: 1.5 },
  { label: '2.0x', value: 2.0 }
]
