export type IAnimationType = 'sending' | 'success' | 'error' | null;

export interface IAnimationTypeConstant {
  SENDING: IAnimationType;
  SUCCESS: IAnimationType;
  ERROR: IAnimationType;
  NULL: IAnimationType;
}

export const AnimationType: IAnimationTypeConstant = {
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
  NULL: null,
};
