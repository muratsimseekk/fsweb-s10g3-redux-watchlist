import { useSelector } from "react-redux";

export default function FavMovie({ title, id }) {
  const favorites = useSelector(store => store.favorites);

  return (
    <div>
      {favorites.map(movie => (
        <div key={movie.id} className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
          <div className="pr-4 flex-1">{movie.title}</div>
          <button className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
            Çıkar
          </button>
        </div>
      ))}
    </div>
  );
}
