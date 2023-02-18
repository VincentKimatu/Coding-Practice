import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MetricsSection, MetricsSectionCard } from './Metric.style';

function Metric() {
  return (
    <MetricsSection>
      <MetricsSectionCard>
        <div className='image'>
          <IoIosPeople />
        </div>
        <h1>1.4k+</h1>
        <p>Communities Formed</p>
      </MetricsSectionCard>

      <MetricsSectionCard>
        <div className='image'>
          <BiMessageRoundedDots />
        </div>
        <h1>1.4k+</h1>
        <p>Communities Formed</p>
      </MetricsSectionCard>
    </MetricsSection>
  );
}

export default Metric;
