
import { LinkItem } from './types';

export const SOCIAL_LINKS: LinkItem[] = [
  {
    id: 'acao',
    title: 'AÇÃO R$ 1.200,00 NO PIX',
    url: 'https://bigodepolemico.com/campanha/1000-reais-no-pix-2',
    bgImage: 'https://i.imgur.com/knOHDZ5.png',
    borderColor: '#FF2A2A', // Ajustado para o vermelho de destaque da imagem
    description: 'PARTICIPE JÁ!',
    type: 'acao'
  },
  {
    id: 'whatsapp',
    title: 'MEU WHATSAPP',
    url: 'https://wa.me/5545988212725?text=Fala%20bigode%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20fazer%20uma%20publicidade%20com%20voc%C3%AA%2C%20podemos%20conversar%3F',
    bgImage: 'https://i.imgur.com/zbhNfOV.png',
    borderColor: '#FFD700',
    description: 'Vamos impulsionar sua marca? Clique aqui',
    type: 'whatsapp'
  },
  {
    id: 'tiktok',
    title: 'MEU TIK TOK',
    url: 'https://www.tiktok.com/@bigodepolemico', // URL padrão se não fornecida
    bgImage: 'https://i.imgur.com/Ud7oMFc.png',
    borderColor: '#ef4444',
    description: 'POSTO VÍDEOS DIARIAMENTE NO TIK TOK A REDE ONDE MAIS CRESÇO',
    type: 'tiktok'
  },
  {
    id: 'youtube',
    title: 'MEU CANAL NO YOUTUBE',
    url: 'https://youtube.com/@bigodepolemico?si=IpuBvwxiS0gqfIz5',
    bgImage: 'https://i.imgur.com/MeWAzdK.png',
    borderColor: '#00BFFF',
    description: 'VÍDEOS GRÁTIS ENSINANDO DA FORMA MAIS RÁPIDA E FÁCIL POSSÍVEL!',
    type: 'youtube'
  },
  {
    id: 'instagram',
    title: 'MEU INSTAGRAM',
    url: 'https://www.instagram.com/bigodepolemico?igsh=MWJpY2VzNjQ4Z3ZoMw==',
    bgImage: 'https://i.imgur.com/kKT70gy.png',
    borderColor: '#FF2A2A',
    description: 'ACOMPANHE MEU DIA A DIA EM TEMPO REAL!',
    type: 'instagram'
  }
];

export const PROFILE_NAME = '@bigodepolemico';
// Imagem de fundo geral do app
export const BG_IMAGE = 'https://images.unsplash.com/photo-1534796633334-3fc8f6572d32?auto=format&fit=crop&q=80&w=2070'; 
