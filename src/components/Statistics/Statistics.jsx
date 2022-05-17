import PropTypes from 'prop-types';

import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => {
          const { id, label, percentage } = stat;

          return (
            <StatisticsItem key={id} label={label} percentage={percentage} />
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
