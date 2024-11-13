'use client';

import useEthereum from '@/hooks/useEthereum';

const TestPage = () => {
  const infos = useEthereum();

  return <div className="pt-32">
    <pre>
      {JSON.stringify(infos, null, 2)}
    </pre>
    <div>
      <button>connect wallet</button>
    </div>
  </div>;
};

export default TestPage;
