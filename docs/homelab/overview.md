---
sidebar_position: 1
title: Homelab Overview
---

# Homelab Overview

My homelab is a personal infrastructure environment where I experiment with technologies I use (or want to use) professionally. It's where I break things on purpose, practice incident response, and test configurations before recommending them.

## Current Setup

| Component | Details |
|---|---|
| **Hardware** | Mini PC / old laptop / Raspberry Pi (update with your actual hardware) |
| **Hypervisor** | Proxmox VE / VirtualBox (update accordingly) |
| **VMs** | 3–4 Ubuntu Server VMs |
| **Networking** | VLAN segmentation, pfSense/OPNsense firewall |
| **Storage** | NFS share for persistent data |

## What's Running

- **Kubernetes cluster** — 3-node k3s cluster for container orchestration practice
- **Monitoring stack** — Prometheus + Grafana for cluster and host metrics
- **Pi-hole** — Network-wide DNS ad blocking
- **Nginx Proxy Manager** — Reverse proxy for internal services
- **Portainer** — Docker container management UI

## Why a Homelab?

- Practice Kubernetes operations without cloud costs
- Test CloudFormation templates and automation scripts in a safe environment
- Learn networking concepts hands-on (VLANs, firewall rules, DNS)
- Build muscle memory with Linux administration
- Have a playground for new tools before using them in production

## Network Diagram

```
Internet
   ↓
Router/Firewall (pfSense)
   ↓
Managed Switch (VLANs)
   ├── VLAN 10: Management
   ├── VLAN 20: Kubernetes nodes
   └── VLAN 30: IoT / isolated devices
```

*Update this diagram to reflect your actual network topology.*

## What I've Learned

Running a homelab has taught me more about infrastructure than any course. When your DNS server goes down at midnight and your entire network loses name resolution, you learn to build redundancy. When a Kubernetes node runs out of disk and pods start getting evicted, you learn to set resource limits and monitor storage.

The homelab is where theory becomes practice.
