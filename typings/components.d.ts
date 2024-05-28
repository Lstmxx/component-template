import * as components from '../packages/components';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TestButton: typeof components.Button;
  }
}

export {}