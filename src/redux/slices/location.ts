import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import SessionStorage from '@service/sessionStorage';

const initialState = {
  lat: null,
  lng: null,
  centerLat: null,
  centerLng: null,
  zoom: 7,
  isLoading: true,
  error: '',
};

const CustomAxios = axios.create();

export const fetchLocation = createAsyncThunk(
  'fetchLocation',
  async (config: { location: string | null; forceFetch?: boolean }) => {
    let payload;

    if (config.location != null) {
      const locationCache = SessionStorage.get('latLonCache');
      const newCache = Object.assign({}, locationCache);

      const latLon = newCache[config.location];

      if (latLon != null) {
        // If the location was found in cache, use the cached version
        payload = {
          lat: latLon.lat,
          lng: latLon.lng,
          centerLat: latLon.lat,
          centerLng: latLon.lng,
          zoom: 10,
        };
      } else {
        // Fetch the location if it's not found in cache
        const res = await CustomAxios.post(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${config.location}&sensor=false&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
        );

        payload = {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng,
          centerLat: res.data.results[0].geometry.location.lat,
          centerLng: res.data.results[0].geometry.location.lng,
          zoom: 10,
        };

        newCache[config.location] = {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng,
        };

        SessionStorage.set('latLonCache', newCache);
      }
    } else {
      // When no location is provided, set some default values for the map
      payload = {
        lat: null,
        lng: null,
        centerLat: '47.751076',
        centerLng: '-120.740135',
        zoom: 7,
      };
    }

    return payload;
  }
);

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    setLatLngZoom: (
      state,
      action: PayloadAction<{ lat: string; lng: string; zoom: number }>
    ) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.zoom = action.payload.zoom;
    },
    setCenter: (state, action: PayloadAction<{ lat: string; lng: string }>) => {
      state.centerLat = action.payload.lat;
      state.centerLng = action.payload.lng;
    },
    setLat: (state, action: PayloadAction<string>) => {
      state.lat = action.payload;
    },
    setLng: (state, action: PayloadAction<string>) => {
      state.lng = action.payload;
    },
  },
  extraReducers: {
    [fetchLocation.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLocation.fulfilled.type]: (
      state,
      action: PayloadAction<{
        lat: string;
        lng: string;
        zoom: number;
        centerLat: string;
        centerLng: string;
      }>
    ) => {
      state.isLoading = false;
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.zoom = action.payload.zoom || 10;
      state.centerLat = action.payload.centerLat;
      state.centerLng = action.payload.centerLng;
    },
    [fetchLocation.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setZoom,
  setLatLngZoom,
  setCenter,
  setLat,
  setLng,
} = locationSlice.actions;

export default locationSlice.reducer;
