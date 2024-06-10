# HTTP ECHO

## Build

```bash
docker buildx build -t ralls0/http-echo:1.0.0 --progress=plain . --platform linux/amd64
```

## Push

```bash
docker push ralls0/http-echo:1.0.0
```

## K8s

```bash
kubectl apply -f deployment-http-echo.yaml
kubectl apply -f service-http-echo.yaml
```
