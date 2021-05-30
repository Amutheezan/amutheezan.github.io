---
type: posts
title: CPU/GPU/TPU Performance Comparison
author: Amutheezan Sivagnanam

---
I follow the basic step by step guide in [1].
I follow the instructions to work on TPU using [2].

First we need to import the following libraries, set the configuration to log the information and filter out the warnings.

* tensorflow - for computations with matrices.
* timeit - to compute the time taken

```python
import tensorflow as tf
import timeit
import warnings
warnings.filterwarnings('ignore')
tf.get_logger().setLevel('INFO')
```

### CPU-Version
The code below show the version of code that can be executed in CPU

```python
cpu = tf.config.experimental.list_physical_devices('CPU')[0]
print(f'Selected CPU: {cpu}')

testcpu = """
import tensorflow as tf
with tf.device('/cpu:0'):
  random_image_cpu = tf.random.normal((100, 100, 100, 3))
  net_cpu = tf.compat.v1.layers.conv2d(random_image_cpu, 32, 7)
  net_cpu = tf.math.reduce_sum(net_cpu)
"""

cpu_time = timeit.timeit(testcpu, number=10)

print('Time (s) to convolve 32x7x7x3 filter over random 100x100x100x3 images \n'
      f'(batch x height x width x channel). Sum of ten runs: {cpu_time}')
```

While running on [google colab](https://colab.research.google.com/notebooks) in CPU mode make sure the following configuration is set as shown in the \cref{fig:cpu_sample}. And you can obtain the following outputs

```
Selected CPU: PhysicalDevice(name='/physical_device:CPU:0', device_type='CPU')
Time (s) to convolve 32x7x7x3 filter over random 100x100x100x3 images 
(batch x height x width x channel). Sum of ten runs: 3.8407666499999777
```
![image](images/CPU_configuration.png)

### GPU-Version
The code below show the version of code that can be executed in GPU

```python
gpu = tf.config.experimental.list_physical_devices('GPU')[0]
print(f'Selected GPU: {gpu}')
 
testgpu = """
import tensorflow as tf
with tf.device('/device:GPU:0'):
  random_image_gpu = tf.random.normal((100, 100, 100, 3))
  net_gpu = tf.compat.v1.layers.conv2d(random_image_gpu, 32, 7)
  net_gpu = tf.math.reduce_sum(net_gpu)
"""
 
gpu_time = timeit.timeit(testgpu, number=10)

print('Time (s) to convolve 32x7x7x3 filter over random 100x100x100x3 images \n'
      f'(batch x height x width x channel). Sum of ten runs. {gpu_time}')

print(f'GPU speedup over CPU: {int(cpu_time/gpu_time)}x')
```

While running on google colab in GPU mode make sure the following configuration is set as shown in the \cref{fig:gpu_sample}. And you can obtain the following outputs

```
Selected GPU: PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')
Time (s) to convolve 32x7x7x3 filter over random 100x100x100x3 images 
(batch x height x width x channel). Sum of ten runs. 0.056331392000004143
GPU speedup over CPU: 51x
```
![image](images/GPU_configuration.png)

### TPU-Version

I was able to run the CPU version as well as GPU version, but TPU version doesn't work. Following codes shows the initial TPU version of code that doesn't work, as mentioned in the tutorial,

```python
try:
  tpu = tf.distribute.cluster_resolver.TPUClusterResolver()
  print('Running on TPU ', tpu.cluster_spec().as_dict()['worker'])
except ValueError:
  raise BaseException('ERROR: Not connected to a TPU runtime; '
  'please see the previous cell in this notebook for instructions!')

 
testtpu = """
import tensorflow as tf
with tf.device('/device:XLA_CPU:0'):
  random_image_tpu = tf.random.normal((100, 100, 100, 3))
  net_tpu = tf.compat.v1.layers.conv2d(random_image_tpu, 32, 7)
  net_tpu = tf.math.reduce_sum(net_tpu)
"""
 
tpu_time = timeit.timeit(testtpu, number=10)

print('Time (s) to convolve 32x7x7x3 filter over random 100x100x100x3 images '
      f'(batch x height x width x channel). Sum of ten runs. {tpu_time}')

print(f'TPU speedup over CPU: {int(cpu_time/tpu_time)}x')
```

And obtain the following error message 
```

```
To solve the TPU version, I go through the solution provided in the \cite{tpuincolab} and fixed the issues.
Finally, the code below show the version of code that can be executed in TPU.

\verbatiminput{results/sample/tpu_version.py}

While running on google colab in TPU mode make sure the following configuration is set as shown in the \cref{fig:tpu_sample}. And you can obtain the following outputs
\verbatiminput{results/sample/tpu_output.txt}

\begin{figure}[!ht]
    \centering
    \includegraphics[width=0.5\textwidth]{results/sample/TPU_Configuration.png}
    \caption{Google Colab Configuration to run in TPU mode}
    \label{fig:tpu_sample}
\end{figure}




\subsection*{Observations}
Based on the results the CPU and TPU performs nearly same, but GPU performs more than 50 times than CPU and TPU




The code below show the version of code that contain sample CNN network example.
```python
  (x_train, y_train), (x_test, y_test) = tf.keras.datasets.fashion_mnist.load_data()

  x_train = np.expand_dims(x_train, -1)
  x_test = np.expand_dims(x_test, -1)

  sss = StratifiedShuffleSplit(n_splits=5, random_state=0, test_size=1/6)

  train_index, valid_index = next(sss.split(x_train, y_train))

  x_valid, y_valid = x_train[valid_index], y_train[valid_index]
  x_train, y_train = x_train[train_index], y_train[train_index]

  model = tf.keras.models.Sequential()
  model.add(tf.keras.layers.BatchNormalization(input_shape=x_train.shape[1:]))
  model.add(tf.keras.layers.Conv2D(64, (5, 5), padding='same', activation='elu'))
  model.add(tf.keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2,2)))
  model.add(tf.keras.layers.Dropout(0.25))

  model.add(tf.keras.layers.BatchNormalization(input_shape=x_train.shape[1:]))
  model.add(tf.keras.layers.Conv2D(128, (5, 5), padding='same', activation='elu'))
  model.add(tf.keras.layers.MaxPooling2D(pool_size=(2, 2)))
  model.add(tf.keras.layers.Dropout(0.25))

  model.add(tf.keras.layers.BatchNormalization(input_shape=x_train.shape[1:]))
  model.add(tf.keras.layers.Conv2D(256, (5, 5), padding='same', activation='elu'))
  model.add(tf.keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2,2)))
  model.add(tf.keras.layers.Dropout(0.25))

  model.add(tf.keras.layers.Flatten())
  model.add(tf.keras.layers.Dense(256))
  model.add(tf.keras.layers.Activation('elu'))
  model.add(tf.keras.layers.Dropout(0.5))
  model.add(tf.keras.layers.Dense(10))
  model.add(tf.keras.layers.Activation('softmax'))
  model.summary()

  model.compile(
      optimizer=tf.optimizers.Adam(learning_rate=1e-3, ),
      loss=tf.keras.losses.sparse_categorical_crossentropy,
      metrics=['sparse_categorical_accuracy']
  )
```

The code below show the version of code that can be executed in GPU
```python
import tensorflow as tf
import timeit
import warnings
warnings.filterwarnings('ignore')

tf.get_logger().setLevel('INFO')

gpus = tf.config.experimental.list_physical_devices('GPU')[0]
print(f'Selected GPU: {gpu}')
tf.config.experimental.set_memory_growth(gpu, True)
 
testgpu = """
import os
import tensorflow as tf
import numpy as np
import pandas as pd
from sklearn.model_selection import StratifiedShuffleSplit

with tf.device('/device:GPU:0'):
    <SAMPLE CNN CODE>
"""
 

gpu_time = timeit.timeit(testgpu, number=10)

print('GPU time taken (seconds):', gpu_time)
```

Same as previous section, while running on google colab in GPU mode make sure the following configuration is set as shown in the \cref{fig:gpu_sample}. And you can obtain the following outputs
\verbatiminput{results/cnn/gpu_output.txt}

The code below show the version of code that can be executed in GPU
\verbatiminput{results/cnn/tpu_version.py}

Again, same as previous section, while running on google colab in TPU mode make sure the following configuration is set as shown in the \cref{fig:tpu_sample}. And you can obtain the following outputs
\verbatiminput{results/cnn/tpu_output.txt}

\subsection*{Observations}
Based on the results TPU performs around 1.5 times better than GPU in-terms the computation time of the CNN sample code.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4MTQ1ODQwMTYsMjA1NjkxMzcxN119
-->