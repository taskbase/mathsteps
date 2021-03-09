import { ConstantFactors } from "../../lib/src/factor/ConstantFactors";

import { TestUtil } from "../TestUtil";

function testPrimeFactors(input, output) {
  TestUtil.testFunctionOutput(ConstantFactors.getPrimeFactors, input, output);
}

describe("prime factors", function () {
  const tests = [
    [1, [1]],
    [-1, [-1, 1]],
    [-2, [-1, 2]],
    [5, [5]],
    [12, [2, 2, 3]],
    [15, [3, 5]],
    [36, [2, 2, 3, 3]],
    [49, [7, 7]],
    [1260, [2, 2, 3, 3, 5, 7]],
    [13195, [5, 7, 13, 29]],
    [1234567891, [1234567891]],
  ];
  tests.forEach((t) => testPrimeFactors(t[0], t[1]));
});

function testFactorPairs(input, output) {
  TestUtil.testFunctionOutput(ConstantFactors.getFactorPairs, input, output);
}

describe("factor pairs", function () {
  const tests = [
    [
      1,
      [
        [-1, -1],
        [1, 1],
      ],
    ],
    [
      5,
      [
        [-1, -5],
        [1, 5],
      ],
    ],
    [
      12,
      [
        [-3, -4],
        [-2, -6],
        [-1, -12],
        [1, 12],
        [2, 6],
        [3, 4],
      ],
    ],
    [
      -12,
      [
        [-3, 4],
        [-2, 6],
        [-1, 12],
        [1, -12],
        [2, -6],
        [3, -4],
      ],
    ],
    [
      15,
      [
        [-3, -5],
        [-1, -15],
        [1, 15],
        [3, 5],
      ],
    ],
    [
      36,
      [
        [-6, -6],
        [-4, -9],
        [-3, -12],
        [-2, -18],
        [-1, -36],
        [1, 36],
        [2, 18],
        [3, 12],
        [4, 9],
        [6, 6],
      ],
    ],
    [
      49,
      [
        [-7, -7],
        [-1, -49],
        [1, 49],
        [7, 7],
      ],
    ],
    [
      1260,
      [
        [-35, -36],
        [-30, -42],
        [-28, -45],
        [-21, -60],
        [-20, -63],
        [-18, -70],
        [-15, -84],
        [-14, -90],
        [-12, -105],
        [-10, -126],
        [-9, -140],
        [-7, -180],
        [-6, -210],
        [-5, -252],
        [-4, -315],
        [-3, -420],
        [-2, -630],
        [-1, -1260],
        [1, 1260],
        [2, 630],
        [3, 420],
        [4, 315],
        [5, 252],
        [6, 210],
        [7, 180],
        [9, 140],
        [10, 126],
        [12, 105],
        [14, 90],
        [15, 84],
        [18, 70],
        [20, 63],
        [21, 60],
        [28, 45],
        [30, 42],
        [35, 36],
      ],
    ],
    [
      13195,
      [
        [-91, -145],
        [-65, -203],
        [-35, -377],
        [-29, -455],
        [-13, -1015],
        [-7, -1885],
        [-5, -2639],
        [-1, -13195],
        [1, 13195],
        [5, 2639],
        [7, 1885],
        [13, 1015],
        [29, 455],
        [35, 377],
        [65, 203],
        [91, 145],
      ],
    ],
    [
      1234567891,
      [
        [-1, -1234567891],
        [1, 1234567891],
      ],
    ],
  ];
  tests.forEach((t) => testFactorPairs(t[0], t[1]));
});
