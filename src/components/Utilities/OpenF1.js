import axios from 'axios';

class OpenF1 {
    constructor() {
        this.endpoints = new Map([
            ["drivers", "https://api.openf1.org/v1/drivers?"],
            ["sessions", "https://api.openf1.org/v1/sessions?"],
            ["positions", "https://api.openf1.org/v1/position?"],
            ["laps", "https://api.openf1.org/v1/laps?"]
        ]);
    }

    getEndpoint(route) {
        return this.endpoints.get(route) || null;
    }

    buildQuery(params) {
        return Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
    }

    async getDrivers(params) {
        return this.makeRequest("drivers", params);
    }

    async getSessions(params) {
        return this.makeRequest("sessions", params);
    }

    async getPositions(params) {
        return this.makeRequest("positions", params);
    }

    async getLaps(params) {
        return this.makeRequest("laps", params);
    }

    async makeRequest(route, params) {
        const endpoint = this.getEndpoint(route);
        if (!endpoint) {
            throw new Error(`Endpoint for route ${route} not found.`);
        }

        const url = endpoint + this.buildQuery(params);
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(`Error making GET request to ${route}:`, error);
            throw error;
        }
    }
}

export default OpenF1;