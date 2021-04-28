import PropTypes from 'prop-types';
import Entry from './entry';

function Entries({ entries }) {
  if (entries) {
    return (
      <div>
        {entries.map((e) => (
          <div key={e.id} className="py-2">
            <Entry id={e.id} title={e.title} content={e.content} />
          </div>
        ))}
      </div>
    );
  }
  return null;
}

Entries.propTypes = {
  // An array of object taking on a particular shape
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Entries;
