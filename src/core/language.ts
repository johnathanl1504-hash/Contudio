// src/core/language.ts

export type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'other';

export interface Phonology {
  phonemes: string[]; // 나중에 자음/모음/feature 구조로 확장 예정
}

export interface Lexeme {
  id: string;         // uuid or nanoid
  orth: string;       // 표기 (단어 형태)
  gloss: string;      // 의미 / gloss
  pos: PartOfSpeech;  // 품사
  notes?: string;     // 메모 (optional)
  createdAt: string;
  updatedAt: string;
}

export interface Language {
  id: string;
  name: string;

  phonology: Phonology;
  lexicon: Lexeme[];

  createdAt: string;
  updatedAt: string;
}

// 새 언어 만들 때 폼에서 쓸 수 있는 타입
export interface NewLanguagePayload {
  name: string;
}
