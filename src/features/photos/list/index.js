import { useSelector, useDispatch } from 'react-redux';
import { removePhoto, selectFilteredPhotos } from '../photos.slice'; // Task 7 and Task 13
import './list.css';

export default function PhotosList() {
  const photos = useSelector(selectFilteredPhotos); // Task 14
  const dispatch = useDispatch(); // Task 8

  function handleDeleteButtonClick(id) {
    dispatch(removePhoto(id)); // Task 9
  }

  const photosListItems = photos.map(({ id, caption, imageUrl }) => (
      <li key={id}>
        <img alt={caption} src={imageUrl} />
        <div>
          <p>{caption}</p>
          <button
              data-testid={`${caption}-button`}
              onClick={() => handleDeleteButtonClick(id)}>
            Delete
          </button>
        </div>
      </li>
  ));

  return photosListItems.length > 0 ? (
      <ul>{photosListItems}</ul>
  ) : (
      <h3>No doggies to display...</h3>
  );
}
