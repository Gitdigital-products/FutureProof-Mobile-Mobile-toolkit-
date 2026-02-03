1. Add the repository to /etc/yum.repos.d
```d
sudo tee /etc/yum.repos.d/antigravity.repo << EOL
[antigravity-rpm]
name=Antigravity RPM Repository
baseurl=https://us-central1-yum.pkg.dev/projects/antigravity-auto-updater-dev/antigravity-rpm
enabled=1
gpgcheck=0
EOL
```
2. Update the package cache

```bash
sudo dnf makecache
```
3. Install the package
```bash
sudo dnf install antigravity
```
