import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://fcultxbialkdsvhhlrzx.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjdWx0eGJpYWxrZHN2aGhscnp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxOTkxMjEsImV4cCI6MjAzNzc3NTEyMX0._1OPcSvSwO-dl2FaFkjfRgv14vzjX2DIHjPvKMyWo0w",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjdWx0eGJpYWxrZHN2aGhscnp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxOTkxMjEsImV4cCI6MjAzNzc3NTEyMX0._1OPcSvSwO-dl2FaFkjfRgv14vzjX2DIHjPvKMyWo0w"
    }
});