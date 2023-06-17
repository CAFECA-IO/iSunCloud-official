export type IAnimationType = 'sending' | 'success' | 'error';

export interface IAnimationTypeConstant {
  SENDING: IAnimationType;
  SUCCESS: IAnimationType;
  ERROR: IAnimationType;
}

export const AnimationType: IAnimationTypeConstant = {
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
};
