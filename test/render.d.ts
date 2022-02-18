import { RenderOptions } from '@testing-library/react';
import React from 'react';
declare const customRender: (ui: React.ReactElement, options?: Omit<RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement>, "queries"> | undefined) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
export * from '@testing-library/react';
export { customRender as render };
