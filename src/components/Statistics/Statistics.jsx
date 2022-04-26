import PropTypes from 'prop-types';

import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id} className="item">
              <StatisticsItem label={stat.label} percentage={stat.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
