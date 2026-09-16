#!/usr/bin/env bash
# Fetches the GCE photography/logo assets from the live gce.com.hk site.
# (Binary assets are kept out of git; see README.)
set -u
BASE="https://www.gce.com.hk"
UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"
fail=0

mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/06_GI%20Logging.jpg" -o "public/images/core-logging.jpg" || { echo "FAILED: images/core-logging.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/services/gi/Corehole%20Drilling.jpg" -o "public/images/corehole-drilling.jpg" || { echo "FAILED: images/corehole-drilling.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/10_Derrick%20Barge%20Support.jpg" -o "public/images/derrick-barge.jpg" || { echo "FAILED: images/derrick-barge.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/services/gi/General%20Drill%20Hole%20Setup%20%281%29.jpg" -o "public/images/drill-setup.jpg" || { echo "FAILED: images/drill-setup.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/new_works/GI%20Logging.jpg" -o "public/images/gi-logging.jpg" || { echo "FAILED: images/gi-logging.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/12_Tung%20Chung%20Area.jpg" -o "public/images/hero-tung-chung.jpg" || { echo "FAILED: images/hero-tung-chung.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/services/gi/Inclined%20Drilling.jpg" -o "public/images/inclined-drilling.jpg" || { echo "FAILED: images/inclined-drilling.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/02_Drill%20Rig%20on%20Jack%20Up.jpg" -o "public/images/jackup-rig.jpg" || { echo "FAILED: images/jackup-rig.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/new_works/Koden%20Test.jpg" -o "public/images/koden-test.jpg" || { echo "FAILED: images/koden-test.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/new_works/Oedometer%20Test.jpg" -o "public/images/lab-oedometer.jpg" || { echo "FAILED: images/lab-oedometer.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/05_Land%20Drilling.jpg" -o "public/images/land-drilling.jpg" || { echo "FAILED: images/land-drilling.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/03_Marine%20Drilling%20%282%29.jpg" -o "public/images/marine-drilling-2.jpg" || { echo "FAILED: images/marine-drilling-2.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/03_Marine%20Drilling%20%281%29.jpg" -o "public/images/marine-drilling.jpg" || { echo "FAILED: images/marine-drilling.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/services/gi/Pressuremeter%20Setup.jpg" -o "public/images/pressuremeter.jpg" || { echo "FAILED: images/pressuremeter.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/01_Project%20Vessels.jpg" -o "public/images/project-vessels.jpg" || { echo "FAILED: images/project-vessels.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/services/gi/Rock%20Core%20Photography.jpg" -o "public/images/rock-core.jpg" || { echo "FAILED: images/rock-core.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/services/gi/Vane%20Shear%20Test.jpg" -o "public/images/vane-shear.jpg" || { echo "FAILED: images/vane-shear.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/projects/gi2016_nl2016/11_Our%20Vessels.jpg" -o "public/images/vessels.jpg" || { echo "FAILED: images/vessels.jpg"; fail=1; }
mkdir -p "public/images"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/new_works/Welding%20Inspection.jpg" -o "public/images/welding-inspection.jpg" || { echo "FAILED: images/welding-inspection.jpg"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/aa_logo.png" -o "public/images/logos/aa.png" || { echo "FAILED: images/logos/aa.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/asd_logo.png" -o "public/images/logos/archsd.png" || { echo "FAILED: images/logos/archsd.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/cedd_logo.png" -o "public/images/logos/cedd.png" || { echo "FAILED: images/logos/cedd.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/ha_logo.png" -o "public/images/logos/ha.png" || { echo "FAILED: images/logos/ha.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/hkha_logo.png" -o "public/images/logos/hkha.png" || { echo "FAILED: images/logos/hkha.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/hkhs_logo.png" -o "public/images/logos/hkhs.png" || { echo "FAILED: images/logos/hkhs.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/lands_logo.png" -o "public/images/logos/landsd.png" || { echo "FAILED: images/logos/landsd.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/clients/mtr_logo.png" -o "public/images/logos/mtr.png" || { echo "FAILED: images/logos/mtr.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/accreditation/hkias.png" -o "public/images/logos/hkias.png" || { echo "FAILED: images/logos/hkias.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/assets/img/accreditation/hoklas.png" -o "public/images/logos/hoklas.png" || { echo "FAILED: images/logos/hoklas.png"; fail=1; }
mkdir -p "public/images/logos"
curl -sfkL -A "$UA" --retry 3 --max-time 90 "$BASE/ui/img/favicon.png" -o "public/images/logos/favicon.png" || { echo "FAILED: images/logos/favicon.png"; fail=1; }

if [ "$fail" -ne 0 ]; then echo "Some images failed to download" >&2; exit 1; fi
echo "All images fetched."
