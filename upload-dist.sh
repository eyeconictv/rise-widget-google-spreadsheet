cp -r dist spreadsheet
gsutil rsync -d -r spreadsheet gs://install-versions.risevision.com/widgets/spreadsheet
gsutil -m acl -r ch -u AllUsers:R gs://install-versions.risevision.com/widgets/spreadsheet
gsutil -m setmeta -r -h Cache-Control:private,max-age=0 gs://install-versions.risevision.com/widgets/spreadsheet
