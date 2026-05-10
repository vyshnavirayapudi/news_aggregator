import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setError("Location access denied");
      }
    );
  }, []);

  return { location, error };
};

export default useGeolocation;