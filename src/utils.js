import { FaBorderAll, FaBookmark } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { RiTvLine } from 'react-icons/ri';

export const links = [
  {
    id: 1,
    icon: <FaBorderAll />,
    url: '/',
  },
  {
    id: 2,
    icon: <MdLocalMovies />,
    url: '/movies',
  },
  {
    id: 3,
    icon: <RiTvLine />,
    url: '/tvseries',
  },
  {
    id: 4,
    icon: <FaBookmark />,
    url: '/bookmarked',
  },
];
