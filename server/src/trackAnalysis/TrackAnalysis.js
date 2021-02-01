module.exports = class TrackAnalysis {
  constructor(points) {
    this.points = points;
    this.speed = this.getAverageSpeed();
    this.distance = this.getDistance();
    this.time = this.getTime();
    this.pace = this.getAveragePace();
  }

  extractPoints = () => {
    console.log(this.points);
    const processedPoints = this.points.map((locations) => ({
      lat: locations.coords.latitude,
      long: locations.coords.longitude,
    }));
    return processedPoints;
  };

  distanceInKmBetweenEarthCoordinates = (lat1, lon1, lat2, lon2) => {
    const degreesToRadians = (degrees) => {
      return (degrees * Math.PI) / 180;
    };

    const earthRadiusKm = 6371;
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  };

  getDistance = () => {
    let distances = [];
    const arrayOfPoints = this.extractPoints();

    for (let i = 0; i < arrayOfPoints.length - 1; i++) {
      let dist = this.distanceInKmBetweenEarthCoordinates(
        arrayOfPoints[i].lat,
        arrayOfPoints[i].long,
        arrayOfPoints[i + 1].lat,
        arrayOfPoints[i + 1].long
      );
      distances.push(dist);
    }
    const sum = distances.reduce((a, b) => a + b, 0);
    return sum;
  };

  getTime = () => {
    const time =
      this.points[this.points.length - 1].timestamp - this.points[0].timestamp;
    return time / 1000;
  };

  getAverageSpeed = () => {
    const distance = this.getDistance();
    const time = this.getTime();

    return distance / time;
  };

  getAveragePace = () => {
    const distance = this.getDistance();
    const time = this.getTime();
    return time / distance;
  };
};
