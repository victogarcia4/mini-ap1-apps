import json
import sys

def main():
    content_path = "c:\\Users\\skint\\Desktop\\Mini apps active learning\\content.json"
    
    try:
        with open(content_path, "r") as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: content.json not found at {content_path}", file=sys.stderr)
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error parsing content.json: {e}", file=sys.stderr)
        sys.exit(1)
        
    synovial_types = data.get("learning_outcomes", {}).get("8.1", {}).get("synovial_joint_types", [])
    
    # 6 synovial types list
    required_types = {
        "ball-and-socket",
        "condyloid",
        "plane",
        "hinge",
        "pivot",
        "saddle"
    }
    
    mapped_types = set()
    errors = []
    
    for jt in synovial_types:
        jtype = jt.get("type", "").lower().strip()
        mapped_types.add(jtype)
        
        # Check description
        if not jt.get("description"):
            errors.append(f"Joint type '{jt.get('type')}' is missing a description.")
            
        # Check movements
        movements = jt.get("movements_allowed", [])
        if not movements:
            errors.append(f"Joint type '{jt.get('type')}' is missing allowed movements list.")
            
        # Check examples
        examples = jt.get("examples", [])
        if not examples:
            errors.append(f"Joint type '{jt.get('type')}' is missing articulating examples.")
        else:
            for i, ex in enumerate(examples):
                if not ex.get("joint"):
                    errors.append(f"Joint type '{jt.get('type')}' Example {i+1} is missing a joint name.")
                if not ex.get("articulation"):
                    errors.append(f"Joint type '{jt.get('type')}' Example {i+1} is missing articulation bone details.")

    # Check for missing types
    missing_types = required_types - mapped_types
    if missing_types:
        errors.append(f"Missing required synovial joint types: {', '.join(missing_types)}")
        
    # Print results
    print("==================================================")
    print("SYNOVIAL JOINT TAXONOMY VALIDATION REPORT")
    print("==================================================")
    
    if errors:
        print(f"Validation FAILED with {len(errors)} error(s):")
        for err in errors:
            print(f"- {err}")
        sys.exit(1)
    else:
        print("Validation PASSED! All 6 synovial types are fully mapped:")
        for jt in synovial_types:
            name = jt.get("type")
            examples_list = [ex.get("joint") for ex in jt.get("examples", [])]
            movements_list = jt.get("movements_allowed", [])
            print(f"  [OK] {name}:")
            print(f"     - Examples: {', '.join(examples_list)}")
            print(f"     - Movements: {', '.join(movements_list)}")
        sys.exit(0)

if __name__ == "__main__":
    main()
