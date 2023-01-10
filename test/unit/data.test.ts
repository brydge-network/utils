/* eslint-disable no-restricted-syntax */
import { SupportedChainId } from '../../src/constants';
import { runAnalysis } from '../../src/dataCollector';

jest.setTimeout(1000000);
describe('utils | data collection', () => {
  it('should do cool analysis', async () => {
    const mainnetAverage = await runAnalysis(SupportedChainId.MAINNET).then((res) => {
      let total = 0;
      for (const [address, value] of res) {
        total += value;
      }
      const average = total / res.length;
      return average;
    });

    const polygonAverage = await runAnalysis(SupportedChainId.POLYGON).then((res) => {
      let total = 0;
      for (const [address, value] of res) {
        total += value;
      }
      const average = total / res.length;
      return average;
    });
    const avalancheAverage = await runAnalysis(SupportedChainId.AVALANCHE).then((res) => {
      let total = 0;
      for (const [address, value] of res) {
        total += value;
      }
      const average = total / res.length;
      return average;
    });
    const optimismAverage = await runAnalysis(SupportedChainId.OPTIMISM).then((res) => {
      let total = 0;
      for (const [address, value] of res) {
        total += value;
      }
      const average = total / res.length;
      return average;
    });
    const arbitrumAverage = await runAnalysis(SupportedChainId.ARBITRUM_ONE).then((res) => {
      let total = 0;
      for (const [address, value] of res) {
        total += value;
      }
      const average = total / res.length;
      return average;
    });
    console.log('mainnetAverage', mainnetAverage);
    console.log('polygonAverage', polygonAverage);
    console.log('avalancheAverage', avalancheAverage);
    console.log('optimismAverage', optimismAverage);
    console.log('arbitrumAverage', arbitrumAverage);
  });
});
