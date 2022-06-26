import mongoose from 'mongoose';

const ServerInfoSchema = new mongoose.Schema(
    {
      envName: {type: String, required: true},
      ip: {type: String, required: true},
      serverTime: {type: String, required: true},
    },
    {timestamps: true},
);

const ServerInfo = mongoose.model('ServerInfo', ServerInfoSchema);

export default ServerInfo;
