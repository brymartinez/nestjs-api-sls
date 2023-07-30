import { join } from 'path';
import { IgnorePlugin } from 'webpack';
import { lib } from 'serverless-webpack';
import ForkTSCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

// List of Nestjs lazy imports
const lazyImports = [
  '@nestjs/microservices/microservices-module',
  '@nestjs/websockets/socket-module',
  '@nestjs/platform-express',
  '@grpc/grpc-js',
  '@grpc/proto-loader',
  'kafkajs',
  'mqtt',
  'nats',
  'ioredis',
  'amqplib',
  'amqp-connection-manager',
  'pg-native', // for `pg` only
  'cache-manager',
];

export const mode = lib.webpack.isLocal ? 'development' : 'production';
export const devtool = 'source-map';
export const entry = lib.entries;
export const target = 'node';
export const resolve = {
  extensions: ['.cjs', '.mjs', '.js', '.ts'],
};
export const output = {
  // required for @vendia/serverless-express
  libraryTarget: 'commonjs2',
  path: join(__dirname, '.webpack'),
  filename: '[name].js',
};
export const externals = [];
export const module = {
  rules: [
    {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.webpack.json',
        transpileOnly: true,
        experimentalFileCaching: true,
      },
    },
  ],
};
export const optimization = {
  minimizer: [
    // Minimizes but keeps class names for debugging
    new TerserPlugin({
      terserOptions: {
        keep_classnames: true,
      },
    }),
  ],
};
export const plugins = [
  new ForkTSCheckerWebpackPlugin(),
  // Checks if lazyImport[] is required, and ignores if not
  new IgnorePlugin({
    checkResource(resource) {
      if (lazyImports.includes(resource)) {
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
      }
      return false;
    },
  }),
];
