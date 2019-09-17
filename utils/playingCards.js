'use strict';

const playingCards = [
  '🂠',
  '🂡',
  '🂢',
  '🂣',
  '🂤',
  '🂥',
  '🂦',
  '🂧',
  '🂨',
  '🂩',
  '🂪',
  '🂫',
  '🂭',
  '🂮',
  '🂱',
  '🂲',
  '🂳',
  '🂴',
  '🂵',
  '🂶',
  '🂷',
  '🂸',
  '🂹',
  '🂺',
  '🂻',
  '🂽',
  '🂾',
  '🃁',
  '🃂',
  '🃃',
  '🃄',
  '🃅',
  '🃆',
  '🃇',
  '🃈',
  '🃉',
  '🃊',
  '🃋',
  '🃍',
  '🃎',
  '🃑',
  '🃒',
  '🃓',
  '🃔',
  '🃕',
  '🃖',
  '🃗',
  '🃘',
  '🃙',
  '🃚',
  '🃛',
  '🃝',
  '🃞'
];
const cardback = playingCards[0];
const spades = playingCards.slice(1,14);
const hearts = playingCards.slice(14,27);
const diamonds = playingCards.slice(27,40);
const clubs = playingCards.slice(40);

module.exports = {
  playingCards,
  cardback,
  spades,
  hearts,
  diamonds,
  clubs,
};
