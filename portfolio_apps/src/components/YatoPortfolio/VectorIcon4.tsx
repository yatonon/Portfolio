import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.63335 4.37364L1.51379 0.259206C1.16776 -0.086402 0.605566 -0.086402 0.259528 0.259206C-0.0865095 0.604814 -0.0865095 1.16631 0.259528 1.51191L3.75196 5L0.259528 8.4881C-0.0865095 8.8337 -0.0865095 9.3952 0.259528 9.7408C0.432545 9.91361 0.65957 10 0.886652 10C1.11373 10 1.34078 9.9136 1.51378 9.7408L5.63333 5.62637C5.97937 5.28076 5.97937 4.71927 5.63333 4.37366L5.63335 4.37364Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
